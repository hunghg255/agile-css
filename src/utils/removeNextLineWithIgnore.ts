const removeNextLineWithIgnore = (value: string): string => {
  return value.replace(/@agilecss-ignore.*\n.*/g, '');
};

export default removeNextLineWithIgnore;
