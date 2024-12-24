import fs from 'node:fs';
export declare function tryStatSync(file: string): fs.Stats | undefined;
export declare function isFileReadable(filename: string): boolean;
/**
 * Search up for the nearest `package.json`
 */
export declare function searchForPackageRoot(current: string, root?: string): string;
/**
 * Search up for the nearest workspace root
 */
export declare function searchForWorkspaceRoot(current: string, root?: string): string;
