function onExtends() {
  let _extends =
    Object.assign ||
    function(target: any) {
      for (let i = 1; i < arguments.length; i++) {
        let source = arguments[i];

        for (let key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

  //@ts-ignore
  return _extends.apply(this, arguments);
}

export default onExtends;
