const selectorTransformer = (selector: string): string => {
  return selector
    .replace(/\|/g, '\\|')
    .replace(/,/g, '\\,')
    .replace(/\(/g, '\\(')
    .replace(/\)/g, '\\)')
    .replace(/\?/g, '\\?')
    .replace(/\{/g, '\\{')
    .replace(/\}/g, '\\}')
    .replace(/\//g, '\\/')
    .replace(/\.\w*:/g, function(value: any) {
      return value.replace(/:/g, '\\:');
    })
    .replace(/;/g, '\\;')
    .replace(/@/g, '\\@')
    .replace(/#/g, '\\#')
    .replace(/'/g, "\\'")
    .replace(/"/g, '\\"')
    .replace(/%/g, '\\%')
    .replace(/\+/g, '\\+')
    .replace(/>/g, '\\>')
    .replace(/!/g, '\\!')
    .replace(/`/g, '\\`')
    .replace(/\.\d/g, function(value: any) {
      return '\\' + value;
    })
    .replace(/\^/g, '\\^') // Fix pseudo nth-child, nth-last-child, nth-of-type, nth-last-of-type, lang...
    .replace(/(-child|-type|:lang)\\\([\w-+\\]*\\\)/g, function(value: any) {
      let valNumber = value.replace(/.*\\\(|\\\)/g, '').replace(/_|\\/g, ' ');
      return value.replace(/\\\(.*/g, '(' + valNumber + ')');
    });
};

export default selectorTransformer;
