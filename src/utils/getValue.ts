import { CHAR_PATTERN, SPACE, UNDERCORE_PATTERN } from "../constants/constant";
import { Config } from "../types/type";

const getValue = (config: Config, className: string): string => {
  const value = className // Replace all special characters with their escaped version
    // Eg: zzz:xxx|cc -> xxx
    .replace(CHAR_PATTERN, '') // Replace all underscores with a space
    .replace(UNDERCORE_PATTERN, SPACE);

  return value
    .split(SPACE)
    .reduce(function(str: any, item: any) {
      let _config$custom$item;

      const newItem =
        ((_config$custom$item = config.custom[item]) == null
          ? void 0
          : _config$custom$item.toString()) || item;
      return str + ' ' + newItem;
    }, '')
    .trim();
};

export default getValue;
