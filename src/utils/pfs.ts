import { MIN_MAX_DEFAULT_VALUE, MIN_MAX_PATTERN } from "../constants/constant";
import { Plugin } from "../types/type";
import cssLinearInterpolation from "./cssLinearInterpolation";
import stylesMap from "./stylesMap";

const pfs = (minDevice?: number, maxDevice?: number): Plugin => {
  let minDeviceVal = minDevice;
  let maxDeviceVal = maxDevice;

  if (!minDeviceVal) {
    minDeviceVal = 400;
  }

  if (!maxDeviceVal) {
    maxDeviceVal = 1200;
  }

  return function(val) {
    let styles = val.styles,
      addStyles = val.addStyles;
    addStyles(
      stylesMap(styles, function(selector: any, css: any) {
        let _ref4: any;

        let property = css[0],
          value = css[1];

        if (/pfs\(.*\)/g.test(value)) {
          let _value$match$map: any,
            _value$match: any,
            _cssLinearInterpolati: any,
            _ref3: any;

          let _ref2 =
              (_value$match$map =
                (_value$match = value.match(MIN_MAX_PATTERN)) == null
                  ? void 0
                  : _value$match.map(Number)) != null
                ? _value$match$map
                : MIN_MAX_DEFAULT_VALUE,
            min = _ref2[0],
            max = _ref2[1];

          let newValue =
            'clamp(' +
            min +
            'px, ' +
            cssLinearInterpolation(
              ((_cssLinearInterpolati = {}),
              (_cssLinearInterpolati[minDeviceVal as number] = min),
              (_cssLinearInterpolati[maxDeviceVal as number] = max),
              _cssLinearInterpolati)
            ) +
            ', ' +
            max +
            'px)';
          return (_ref3 = {}), (_ref3[selector] = [property, newValue]), _ref3;
        }

        return (_ref4 = {}), (_ref4[selector] = css), _ref4;
      })
    );
  };
};

export default pfs;
