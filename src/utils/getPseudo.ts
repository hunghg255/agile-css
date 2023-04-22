const getPseudo = (className: string): string => {
  const pseudos: any = className.match(/\|\w*(\([\w-+]*\)|)/g);

  if (!pseudos) {
    return '';
  }

  return pseudos.reduce(function(str: any, pseudo$1: any) {
    const _pseudo: any = pseudo$1.replace(/^\||\(.*\)/g, '');

    const valNumber = pseudo$1.replace(/.*\(|\)|[\|\w-]*$/g, '');
    //@ts-ignore
    const pseudoShorthand = pseudo[_pseudo] || _pseudo;

    if (valNumber) {
      return str + ':' + pseudoShorthand + '(' + valNumber + ')';
    }

    return str + ':' + pseudoShorthand;
  }, '');
};

export default getPseudo;
