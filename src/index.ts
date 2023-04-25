export { default as defineConfig } from './utils/defineConfig';
export { default as pfs } from './utils/pfs';
export { default as rtl } from './utils/rtl';
export { default as pixelToRem } from './utils/pixelToRem';
export { default as validator } from './utils/validator';

import {
  COMPILED_SUCCESS,
  CSS_PROPS,
  CSS_PSEUDO,
  DOT,
  MAX_CACHE_SIZE,
  MEDIA_DEFAULT,
  MEDIA_MAX_WIDTH,
} from './constants/constant';
import getBreakpoint from './utils/getBreakpoint';
import getClassNames from './utils/getClassNames';
import getImportant from './utils/getImportant';
import getPseudo from './utils/getPseudo';
import getStyle from './utils/getStyle';
import getValue from './utils/getValue';
import removeDuplicate from './utils/removeDuplicate';
import handleValueHasContent from './utils/handleValueHasContent';
import removeNextLineWithIgnore from './utils/removeNextLineWithIgnore';
import selectorTransformer from './utils/selectorTransformer';
import styleToCssString from './utils/styleToCssString';
import EventEmitter from './components/EventEmitter';

const event = new EventEmitter();

class AgileCss {
  public classNames: any;
  public styles: any;
  public defaultConfig: any;
  public config: any;
  public cache: any;
  public _customValue: any;
  public cssProps: any;
  public pseudo: any;
  public valid: any;
  public value: any;
  public prevInput: any;

  constructor() {
    this.defaultConfig = {
      breakpoints: {
        sm: '768px',
        md: '992px',
        lg: '1200px',
      },
      custom: {},
      cache: true,
      parentSelector: '',
      defaultCss: '',
      exclude: [],
      defaultClassNames: [],
    };
    this.classNames = [];
    this.styles = {};
    this.config = this.defaultConfig;
    this.cache = [];

    this._customValue = function (value: any) {
      return value;
    };

    this.cssProps = CSS_PROPS;
    this.pseudo = CSS_PSEUDO;
    this.valid = new Set();
    this.value = '';
    this.prevInput = '';
  }

  handlePluginAddStyles(styles: any) {
    this.styles = Object.assign({}, this.styles, styles);
  }

  handlePluginAddBase(css: any) {
    if (!this.config.defaultCss.includes(css)) {
      this.config.defaultCss = this.config.defaultCss + '\n' + css;
    }
  }

  handlePluginAddComponent(css: any) {
    this.handlePluginAddBase(css);
  }

  plugins(_plugins: any) {
    let _this = this;

    event.on('plugin', function () {
      if (_plugins.length) {
        _plugins.forEach(function (plugin: any) {
          plugin({
            config: _this.config,
            cssProps: _this.cssProps,
            pseudo: _this.pseudo,
            styles: _this.styles,
            input: _this.value,
            prevInput: _this.prevInput,
            addStyles: _this.handlePluginAddStyles.bind(_this),
            addBase: _this.handlePluginAddBase.bind(_this),
            addComponent: _this.handlePluginAddComponent.bind(_this),
          });
        });
      }
    });
  }

  on(eventType: any, listener: any) {
    return event.on(eventType, listener);
  }

  off(id: any) {
    event.off(id);
  }

  _setClassNames() {
    const newValue = removeNextLineWithIgnore(this.value);
    const newClassNames = getClassNames(newValue, this.config, this.cssProps);
    this.classNames = removeDuplicate(
      [].concat(this.classNames, newClassNames as any)
    );
  }

  _isMediaMaxWidth(selector: string) {
    return selector.replace(/\\/g, '').includes(MEDIA_MAX_WIDTH);
  }

  _checkValidate(className: string, selector: string, style: string) {
    let _this$config$validato, _this$config;

    const breakpoint = getBreakpoint(this.config, selector);
    const newBreakpoint = this.config.breakpoints[breakpoint] || breakpoint;

    const isMax = this._isMediaMaxWidth(selector);

    const selector_ = selectorTransformer(selector);
    let css = selector_ + ' ' + style;

    if (newBreakpoint !== MEDIA_DEFAULT) {
      css =
        '@media (' +
        (isMax ? 'max' : 'min') +
        '-width:' +
        newBreakpoint +
        ') { ' +
        selector_ +
        ' ' +
        style +
        ' }';
    }

    if (this.valid.has(css)) {
      return false;
    }

    const diagnostics =
      (_this$config$validato = (_this$config = this.config).validator) === null
        ? void 0
        : _this$config$validato.call(_this$config, css);

    if (diagnostics !== null && diagnostics.length) {
      event.emit('invalid', {
        message: diagnostics[0].message,
        className: className,
      });
      this.classNames = this.classNames.filter(function (name: any) {
        return name !== className;
      });
      return true;
    }

    event.emit('valid', {
      message: COMPILED_SUCCESS,
      className: className,
    });
    this.valid.add(css);
    return false;
  }

  _setStyles() {
    const _this2 = this;

    this.styles = this.classNames.reduce(function (
      styles: any,
      className: string
    ) {
      let _extends2: any, _extends3: any;

      const propShorthand = className.replace(/:.*/g, '');
      const property = _this2.cssProps[propShorthand];
      const breakpoint = getBreakpoint(_this2.config, className);
      const important = getImportant(className);
      const value =
        '' +
        _this2._customValue(getValue(_this2.config, className)) +
        important;
      const parentSelector = !!_this2.config.parentSelector
        ? _this2.config.parentSelector + ' '
        : '';

      if (!property || !className.includes(':') || !value) {
        return styles;
      }

      const selector =
        '' +
        parentSelector +
        DOT +
        (!!className.includes('|')
          ? '' + className + getPseudo(className)
          : className);
      const style = getStyle(property, value);

      if (_this2._checkValidate(className, selector, style)) {
        return styles;
      }

      return Object.assign(
        {},
        styles,
        ((_extends3 = {}),
        (_extends3[breakpoint] = Object.assign(
          {},
          styles[breakpoint],
          ((_extends2 = {}),
          (_extends2[selector] = [property, handleValueHasContent(value)]),
          _extends2)
        )),
        _extends3)
      );
    },
    {});
    event.emit('plugin', undefined);
  }

  _setCache() {
    this.cache.push(this.value);
    const len = this.cache.length;

    if (len > MAX_CACHE_SIZE) {
      this.cache = this.cache.slice(len - MAX_CACHE_SIZE, len);
    }
  }

  find(value: any) {
    this.value = value;

    if (this.config.cache) {
      if (!this.cache.includes(value)) {
        this._setClassNames();

        this._setStyles();

        this._setCache();
      }
    } else {
      this._setClassNames();

      this._setStyles();
    }

    this.prevInput = value;
    event.emit('success', this.getCss());
    return this;
  }

  setConfig(cfg: any) {
    if (!cfg) {
      cfg = {};
    }

    this.config = Object.assign({}, this.defaultConfig, cfg);
    return this;
  }

  setClassNames(classNames: any) {
    this.classNames = [].concat(this.classNames, classNames);

    this._setStyles();

    event.emit('success', this.getCss());
    return this;
  }

  getCss() {
    let _this3 = this;

    let css = Object.entries(this.styles).reduce(function (css, _ref) {
      let breakpoint = _ref[0],
        style = _ref[1] ?? {};
      const newBreakpoint = _this3.config.breakpoints[breakpoint] || breakpoint;

      const _Object$keys = Object.keys(style),
        className = _Object$keys[0];

      const isMax = _this3._isMediaMaxWidth(className);

      const cssString = styleToCssString(style as {});

      if (newBreakpoint === MEDIA_DEFAULT) {
        return css + '\n' + cssString;
      }

      return (
        css +
        '\n@media (' +
        (isMax ? 'max' : 'min') +
        '-width:' +
        newBreakpoint +
        ') { ' +
        cssString +
        ' }'
      );
    }, '');
    let allCss = (this.config.defaultCss + '\n' + css).replace(/\n+/g, '\n');
    return allCss;
  }

  getClassNames() {
    return this.classNames;
  }

  reset() {
    this.classNames = [];
    this.styles = {};
    this.cache = [];
    this.valid = new Set();
    return this;
  }

  customValue(callback: any) {
    this._customValue = callback;
  }

  addPropsSyntax(props: any) {
    this.cssProps = Object.assign({}, this.cssProps, props);
  }

  addPseudoSyntax(pseudo: any) {
    this.pseudo = Object.assign({}, this.pseudo, pseudo);
  }
}

export default AgileCss;
