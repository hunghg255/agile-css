import { Style, Styles } from "../types/type";

export declare type Callback = (selector: string, css: Style) => Record<string, Style>;

const stylesMap = (styles: Styles, callback: Callback): Styles => {
  return Object.entries(styles).reduce(function(obj, _ref) {
    let _extends2: any;

    let breakpoint: any = _ref[0],
      style = _ref[1];

    return Object.assign(
      {},
      obj,
      ((_extends2 = {}),
      (_extends2[breakpoint] = Object.entries(style).reduce(function(
        obj,
        _ref2
      ) {
        let selector = _ref2[0],
          css = _ref2[1];
        return Object.assign({}, obj, callback(selector, css));
      },
      {})),
      _extends2)
    );
  }, {});
};

export default stylesMap;
