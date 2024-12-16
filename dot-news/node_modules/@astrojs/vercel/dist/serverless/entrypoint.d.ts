import type { IncomingMessage, ServerResponse } from 'node:http';
import type { SSRManifest } from 'astro';
export declare const createExports: (manifest: SSRManifest, { middlewareSecret, skewProtection }: {
    middlewareSecret: string;
    skewProtection: boolean;
}) => {
    default: (req: IncomingMessage, res: ServerResponse) => Promise<void>;
};
export declare function start(): void;
