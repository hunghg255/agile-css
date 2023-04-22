import { Plugin } from "../types/type";
import stylesMap from "./stylesMap";

const groupHover = (): Plugin => {
  const className = 'group-hover';
  return function(_ref) {
    let styles = _ref.styles,
      config = _ref.config,
      addStyles = _ref.addStyles;

    addStyles(
      stylesMap(styles, function(selector: any, css: any) {
        let _ref3: any;

        let property = css[0],
          value = css[1];
        let regexp = new RegExp('\\*' + className, 'g');

        if (regexp.test(selector)) {
          let _ref2: any;

          let parentSelector = !!config.parentSelector
            ? config.parentSelector + ' '
            : '';
          let newSelector =
            parentSelector +
            '.group\\*:hover ' +
            selector
              .replace(regexp, '\\*' + className)
              .replace(config.parentSelector, '');
          let newValue = value.replace(regexp, '');
          return (
            (_ref2 = {}), (_ref2[newSelector] = [property, newValue]), _ref2
          );
        }

        return (_ref3 = {}), (_ref3[selector] = css), _ref3;
      })
    );
  };
};

export default groupHover;
