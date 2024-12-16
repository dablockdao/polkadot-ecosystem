import nodePath from 'node:path';
import { appendForwardSlash, removeLeadingForwardSlash } from '@astrojs/internal-helpers/path';
const pathJoin = nodePath.posix.join;
// Copied from astro/packages/astro/src/core/routing/manifest/create.ts
// Disable eslint as we're not sure how to improve this regex yet
// eslint-disable-next-line regexp/no-super-linear-backtracking
const ROUTE_DYNAMIC_SPLIT = /\[(.+?\(.+?\)|.+?)\]/;
const ROUTE_SPREAD = /^\.{3}.+$/;
function getParts(part, file) {
    const result = [];
    part.split(ROUTE_DYNAMIC_SPLIT).map((str, i) => {
        if (!str)
            return;
        const dynamic = i % 2 === 1;
        const [, content] = dynamic ? /([^(]+)$/.exec(str) || [null, null] : [null, str];
        if (!content || (dynamic && !/^(?:\.\.\.)?[\w$]+$/.test(content))) {
            throw new Error(`Invalid route ${file} — parameter name must match /^[a-zA-Z0-9_$]+$/`);
        }
        result.push({
            content,
            dynamic,
            spread: dynamic && ROUTE_SPREAD.test(content),
        });
    });
    return result;
}
// Copied from /home/juanm04/dev/misc/astro/packages/astro/src/core/routing/manifest/create.ts
// 2022-04-26
function getMatchPattern(segments) {
    return segments
        .map((segment, segmentIndex) => {
        return segment.length === 1 && segment[0].spread
            ? '(?:\\/(.*?))?'
            : // Omit leading slash if segment is a spread.
                // This is handled using a regex in Astro core.
                // To avoid complex data massaging, we handle in-place here.
                (segmentIndex === 0 ? '' : '/') +
                    segment
                        .map((part) => {
                        if (part)
                            return part.spread
                                ? '(.*?)'
                                : part.dynamic
                                    ? '([^/]+?)'
                                    : part.content
                                        .normalize()
                                        .replace(/\?/g, '%3F')
                                        .replace(/#/g, '%23')
                                        .replace(/%5B/g, '[')
                                        .replace(/%5D/g, ']')
                                        .replace(/[*+?^${}()|[\]\\]/g, '\\$&');
                    })
                        .join('');
    })
        .join('');
}
function getReplacePattern(segments) {
    let n = 0;
    let result = '';
    for (const segment of segments) {
        for (const part of segment) {
            // biome-ignore lint/style/useTemplate: <explanation>
            if (part.dynamic)
                result += '$' + ++n;
            else
                result += part.content;
        }
        result += '/';
    }
    // Remove trailing slash
    result = result.slice(0, -1);
    return result;
}
function getRedirectLocation(route, config) {
    if (route.redirectRoute) {
        const pattern = getReplacePattern(route.redirectRoute.segments);
        const path = config.trailingSlash === 'always' ? appendForwardSlash(pattern) : pattern;
        return pathJoin(config.base, path);
        // biome-ignore lint/style/noUselessElse: <explanation>
    }
    else if (typeof route.redirect === 'object') {
        return pathJoin(config.base, route.redirect.destination);
        // biome-ignore lint/style/noUselessElse: <explanation>
    }
    else {
        return pathJoin(config.base, route.redirect || '');
    }
}
function getRedirectStatus(route) {
    if (typeof route.redirect === 'object') {
        return route.redirect.status;
    }
    return 301;
}
export function escapeRegex(content) {
    const segments = removeLeadingForwardSlash(content)
        .split(nodePath.posix.sep)
        .filter(Boolean)
        .map((s) => {
        return getParts(s, content);
    });
    return `^/${getMatchPattern(segments)}$`;
}
export function getRedirects(routes, config) {
    const redirects = [];
    for (const route of routes) {
        if (route.type === 'redirect') {
            redirects.push({
                src: config.base + getMatchPattern(route.segments),
                headers: { Location: getRedirectLocation(route, config) },
                status: getRedirectStatus(route),
            });
        }
        else if (route.type === 'page' && route.route !== '/') {
            if (config.trailingSlash === 'always') {
                redirects.push({
                    src: config.base + getMatchPattern(route.segments),
                    // biome-ignore lint/style/useTemplate: <explanation>
                    headers: { Location: config.base + getReplacePattern(route.segments) + '/' },
                    status: 308,
                });
            }
            else if (config.trailingSlash === 'never') {
                redirects.push({
                    // biome-ignore lint/style/useTemplate: <explanation>
                    src: config.base + getMatchPattern(route.segments) + '/',
                    headers: { Location: config.base + getReplacePattern(route.segments) },
                    status: 308,
                });
            }
        }
    }
    return redirects;
}
