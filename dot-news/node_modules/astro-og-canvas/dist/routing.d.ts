import type { APIRoute, GetStaticPaths } from 'astro';
import type { OGImageOptions } from './types';
export declare function OGImageRoute(opts: OGImageRouteConfig): {
    getStaticPaths: GetStaticPaths;
    GET: APIRoute;
};
interface OGImageRouteConfig {
    pages: {
        [path: string]: any;
    };
    param: string;
    getSlug?: (path: string, page: any) => string;
    getImageOptions: (path: string, page: any) => OGImageOptions | Promise<OGImageOptions>;
}
export {};
