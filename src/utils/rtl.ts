import rtlCSSJS from "rtl-css-js";
import { Plugin } from "../types/type";
import stylesMap from "./stylesMap";
import selectorTransformer from "./selectorTransformer";
import rtlTranslateCalc from "./rtlTranslateCalc";

const resetValue = () => {
  return 'initial';
};

const rtl = (): Plugin => {
  return function(_ref) {
    let styles = _ref.styles,
      addStyles = _ref.addStyles,
      addBase = _ref.addBase;
    addStyles(
      stylesMap(styles, function(selector: any, css: any) {
        let _rtlCssJs: any, _ref6: any;

        let property = css[0],
          value = css[1];

        if (process.env.NODE_ENV === 'test') {
          let _ref2: any;

          return (_ref2 = {}), (_ref2[selector] = css), _ref2;
        }

        let _Object$entries$ = Object.entries(
            rtlCSSJS(
              ((_rtlCssJs = {}), (_rtlCssJs[property] = value), _rtlCssJs)
            )
          )[0],
          newProp = _Object$entries$[0],
          newValue = _Object$entries$[1];
        let start = selector.includes('[dir=rtl] ') ? '' : '[dir=rtl] ';

        if (newProp !== property) {
          let _ref3: any;

          addBase(
            selectorTransformer('' + start + selector) +
              ' { ' +
              property +
              ': ' +
              resetValue() +
              ' }'
          );
          return (
            (_ref3 = {}),
            (_ref3[selector] = css),
            (_ref3['' + start + selector] = [newProp, value]),
            _ref3
          );
        }

        if (newValue !== value) {
          let _ref4: any;

          return (
            (_ref4 = {}),
            (_ref4[selector] = css),
            (_ref4['' + start + selector] = [property, newValue]),
            _ref4
          );
        }

        if (/translate(\(calc|X\(calc)/g.test(value)) {
          let _ref5: any;

          return (
            (_ref5 = {}),
            (_ref5[selector] = css),
            (_ref5['' + start + selector] = [
              property,
              rtlTranslateCalc(value),
            ]),
            _ref5
          );
        }

        return (_ref6 = {}), (_ref6[selector] = css), _ref6;
      })
    );
  };
};

export default rtl;
