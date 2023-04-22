import stylesMap from "./stylesMap";
import { Plugin, Style } from "../types/type";

const pixelToRem = (rootFontSize: number): Plugin => {
  return ({ styles, addStyles }) => {
    //@ts-ignore
    const newStyles = stylesMap(styles, (selector: string, css: Style) => {
      const [property, value] = css;
      if (/[\d.]*px/g.test(value)) {
        const newValue = value.replace(/[\d.]*px/g, (val) => {
          const num = Number(val.replace("px", ""));
          return `${(num * 62.5) / rootFontSize / 10}rem`;
        });
        const newCss = [property, newValue];
        return {
          [selector]: newCss,
        };
      }
      return {
        [selector]: css,
      };
    });
    addStyles(newStyles);
  };
};

export default pixelToRem;
