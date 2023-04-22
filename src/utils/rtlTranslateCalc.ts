
const rtlTranslateCalc = (value: string): string => {
  if (/translateX/g.test(value)) {
    return value
      .replace(/calc\(/, 'calc(-1 * (')
      .replace(/\)$/g, '))')
      .replace(/\)\s*!important/g, ')) !important');
  }

  if (/translate\(/g.test(value)) {
    return value.replace(/calc\(/, 'calc(-1 * (').replace(/\),/g, ')),');
  }

  return value;
};

export default rtlTranslateCalc;
