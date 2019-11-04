const flatten = (list, depth) => {
  depth = typeof depth === "number" ? depth : Infinity;

  if (!depth) {
    if (Array.isArray(list)) {
      return list.map(function(i) {
        return i;
      });
    }
    return list;
  }

  const _flatten = (list, d) => {
    return list.reduce(function(acc, item) {
      if (Array.isArray(item) && d < depth) {
        return acc.concat(_flatten(item, d + 1));
      } else {
        return acc.concat(item);
      }
    }, []);
  };

  return _flatten(list, 1);
};

export default flatten;
