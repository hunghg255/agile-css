const removeRedundantChar = (value: string): string => {
  return value.replace(/^("|'|`|\s)/g, '');
};

export default removeRedundantChar;
