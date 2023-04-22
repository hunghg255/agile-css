export interface Config {
    /**
     * Breakpoints for media queries
     * @example
     * ```ts
     * import { atomic } from 'mota-css';
     *
     * atomic.setConfig({
     *   breakpoints: {
     *     sm: '768px',
     *     md: '992px',
     *     lg: '1200px',
     *   },
     *   ...
     * });
     * ```
     */
    breakpoints: BreakPoints;
    /**
     * Custom css values with object
     * @example
     * ```ts
     * import { atomic } from 'mota-css';
     *
     * atomic.setConfig({
     *   custom: {
     *     'color-primary': 'var(--color-primary)',
     *     'color-secondary': 'var(--color-secondary)'
     *   },
     *   ...
     * });
     * ```
     */
    custom: Custom;
    /**
     * Cache enabled
     */
    cache: boolean;
    /**
     * Parent selector
     * @example
     * ```
     * import { atomic } from 'mota-css';
     *
     * atomic.setConfig({
     *   parentSelector: '.root',
     * });
     *
     * atomic.find(`<div class="c:red"></div>`);
     * console.log(atomic.getCss());
     * // Css result: .root .c\:red { color: red }
     * ```
     */
    parentSelector: string;
    /**
     * Default css
     * @example
     * ```ts
     * import { atomic } from 'mota-css';
     *
     * atomic.setConfig({
     *   defaultCss: `
     *     body {
     *       font-size: 14px;
     *     }
     *   `,
     *   ...
     * });
     * ```
     */
    defaultCss: string;
    /**
     * Exclude class names
     */
    exclude: string[];
    /**
     * Default class names
     */
    defaultClassNames: string[];
    /**
     * Validate css
     */
    validator?: (css: string) => any;
}
export type Style = [string, string];
export interface SelectorStyle {
    [selector: string]: Style;
}
export interface Styles {
    [breakpoint: string]: SelectorStyle;
}
export type BreakPoints = Record<string, string>;
export type Custom = Record<string, string | number>;
export interface PluginOptions {
    config: Config;
    cssProps: CssProps;
    pseudo: Pseudo;
    styles: Styles;
    input: string;
    prevInput: string;
    addStyles(styles: Styles): void;
    addBase(css: string): void;
    addComponent(css: string): void;
}
export type Plugin = (styles: PluginOptions) => void;
export interface Diagnostic {
    message: string;
    className: string;
}
export interface Event {
    success: (css: string) => void;
    valid: (diagnostic: Diagnostic) => void;
    invalid: (diagnostic: Diagnostic) => void;
}
export type Listener = (css: string) => void;
export type ErrorListener = (error: Error | null) => void;
export type Unsubscribe = () => void;
export type CustomValue = (value: string) => string;
export type CssProps = Record<string, string>;
export type Pseudo = Record<string, string>;
