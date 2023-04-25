

import * as vscodeCss from 'vscode-css-languageservice';

const cssToTextDocument = function (text: string) {
    return vscodeCss.TextDocument.create('untitled://untitled', 'css', 1, text);
};

const validator = (css: string): vscodeCss.Diagnostic[] => {
  const cssLS = vscodeCss.getCSSLanguageService();
  const document = cssToTextDocument(css);
  const stylesheet = cssLS.parseStylesheet(document);
  const diagnostics = cssLS.doValidation(document, stylesheet);

  return diagnostics;
};

export default validator;
