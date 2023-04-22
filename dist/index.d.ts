import * as vscode_css_languageservice_1 from 'vscode-css-languageservice';

interface Config {
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
type Style = [string, string];
interface SelectorStyle {
    [selector: string]: Style;
}
interface Styles {
    [breakpoint: string]: SelectorStyle;
}
type BreakPoints = Record<string, string>;
type Custom = Record<string, string | number>;
interface PluginOptions {
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
type Plugin = (styles: PluginOptions) => void;
type CssProps = Record<string, string>;
type Pseudo = Record<string, string>;

declare const defineConfig: (options: Config) => () => Config;

declare const pfs: (minDevice?: number, maxDevice?: number) => Plugin;

declare const rtl: () => Plugin;

declare const pixelToRem: (rootFontSize: number) => Plugin;

declare const validator: (css: string) => vscode_css_languageservice_1.Diagnostic[];

declare class AgileCss {
    classNames: any;
    styles: any;
    defaultConfig: any;
    config: any;
    cache: any;
    _customValue: any;
    cssProps: any;
    pseudo: any;
    valid: any;
    value: any;
    prevInput: any;
    constructor();
    handlePluginAddStyles(styles: any): void;
    handlePluginAddBase(css: any): void;
    handlePluginAddComponent(css: any): void;
    plugins(_plugins: any): void;
    on(eventType: any, listener: any): any;
    off(id: any): void;
    _setClassNames(): void;
    _isMediaMaxWidth(selector: string): boolean;
    _checkValidate(className: string, selector: string, style: string): boolean;
    _setStyles(): void;
    _setCache(): void;
    find(value: any): this;
    setConfig(cfg: any): this;
    setClassNames(classNames: any): this;
    getCss(): string;
    getClassNames(): any;
    reset(): this;
    customValue(callback: any): void;
    addPropsSyntax(props: any): void;
    addPseudoSyntax(pseudo: any): void;
}

export { AgileCss as default, defineConfig, pfs, pixelToRem, rtl, validator };
