// [1,2,3,4,5,6,7,8]
const compact = flat => {
  // flat = flat.map(e => [e]);
  const _compact = arr => {
    if (arr.length <= 2) return arr;
    let newArray = [];
    while (arr.length > 0) newArray.push(arr.splice(0, 2));
    return _compact(newArray);
  };

  flat = _compact(flat);
  return flat;
};

export default compact;
