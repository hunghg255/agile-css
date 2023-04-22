

import * as vscode_css_languageservice_1 from 'vscode-css-languageservice';

const cssToTextDocument = function (text: string) {
    return vscode_css_languageservice_1.TextDocument.create('untitled://untitled', 'css', 1, text);
};

const validator = (css: string) => {
  const cssLS = vscode_css_languageservice_1.getCSSLanguageService();
  const document = cssToTextDocument(css);
  const stylesheet = cssLS.parseStylesheet(document);
  const diagnostics = cssLS.doValidation(document, stylesheet);
  return diagnostics;
};

export default validator;
