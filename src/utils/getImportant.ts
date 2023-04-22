const getImportant = (className: string) => {
  return /!/g.test(className) ? ' !important' : '';
};

export default getImportant;
