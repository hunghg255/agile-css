import removeRedundantChar from "./removeRedundantChar";

const cond = (item: any) => {
  let _item_$match, _item_$match$length, _item_$match2;

  const item_ = removeRedundantChar(item);
  return (
    ((_item_$match = item_.match(/\(|\)/g)) == null
      ? void 0
      : _item_$match.length) != null &&
    ((_item_$match$length =
      (_item_$match2 = item_.match(/\(|\)/g)) == null
        ? void 0
        : _item_$match2.length) != null
      ? _item_$match$length
      : 0) %
      2 !==
      0
  );
};

export default cond;
