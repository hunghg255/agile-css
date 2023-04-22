const handleValueHasContent = (value: string): string => {
  // check content: (This is a content); -> content: 'This is a content';
  return /content:\s+\(.*\)/g.test(value)
    ? value.replace(/\(|\)/g, "'")
    : value;
};

export default handleValueHasContent;
