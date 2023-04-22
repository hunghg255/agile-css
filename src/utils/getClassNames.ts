import { Config, CssProps } from "../types/type";
import cond from "./cond";
import removeDuplicate from "./removeDuplicate";
import removeRedundantChar from "./removeRedundantChar";

const getClassNames = (value: string, config: Config, cssProps: CssProps): string[] => {
  const classNames = Object.keys(cssProps).reduce(function(arr, key) {
    const regexp = new RegExp(
      '("|\'|`|\\s)' +
        key +
        ':(\\w|\\/|\\||\\.|\\+|\\*|\\(|\\)|\\!|%|@|#|,|;|-)*',
      'g'
    );

    return [].concat(
      arr,
      ((value.match(regexp) || []) as any[]).reduce(function(arr: any, item: any) {
        // Condition item has `(` but not `)`
        if (cond(item)) {
          return arr;
        }

        let newItem = removeRedundantChar(item);

        if (config.exclude.includes(newItem) || !/:./g.test(newItem)) {
          return arr;
        }
        //@ts-ignore
        return [].concat(arr, [newItem]);
      }, [])
    );
  }, []);

  return removeDuplicate([].concat(classNames, config.defaultClassNames as any)) as string[];
};

export default getClassNames;
