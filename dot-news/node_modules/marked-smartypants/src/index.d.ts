// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
import type { marked } from 'marked';
import type { MarkedExtension } from 'marked';

/**
 * Use [smartypants](https://github.com/othree/smartypants.js) for "smart" typographic punctuation for things like quotes and dashes
 *
 * @returns A {@link MarkedExtension | MarkedExtension} to be passed to {@link marked.use | `marked.use()`}
 */
export function markedSmartypants(options?: {
  /**
   * A number between -1 and 3 for a preset, or a string with letters for typographic rules. See [all options](https://github.com/othree/smartypants.js#options-and-configuration)
   * @default 2
   */
  config?: string | number;
}): MarkedExtension;
