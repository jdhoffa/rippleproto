const cleanArray = array => {
  let result = [];

  array.forEach(item => {
    if (Array.isArray(item) && item.length !== 0) {
      // Item is a nested array, go one level deeper recursively

      let nestedArray = cleanArray(item);
      if (nestedArray.length > 0) result.push(nestedArray);
    } else if (typeof item !== "undefined" && item !== "" && item !== null) {
      result.push(item);
    }
  });

  return result;
};

export default cleanArray;
