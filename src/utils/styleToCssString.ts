import { SelectorStyle } from "../types/type";
import getStyle from "./getStyle";
import selectorTransformer from "./selectorTransformer";

const styleToCssString = (styles: SelectorStyle): string => {
  return Object.entries(styles).reduce(function(css, _ref) {
    const selector = _ref[0],
      style = _ref[1];

    if (!Array.isArray(style)) {
      return css;
    }

    const strStyle = getStyle.apply(void 0, style as any);
    const selector_ = selectorTransformer(selector).replace(/\s+/g, ' ');
    return css + '\n' + selector_ + ' ' + strStyle;
  }, '');
};

export default styleToCssString;
