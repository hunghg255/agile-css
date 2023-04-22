import handleValueHasContent from "./handleValueHasContent";

const getStyle = (prop: string, value: string): string => {
  let result = '{ ' + prop + ': ' + value + ' }';
  return handleValueHasContent(result);
};

export default getStyle;
