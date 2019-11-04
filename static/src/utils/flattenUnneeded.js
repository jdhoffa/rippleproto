const flattenUnneeded = arr =>
  arr.length === 1 && Array.isArray(arr[0])
    ? flattenUnneeded(arr[0])
    : Array.isArray(arr)
    ? arr.map(flattenUnneeded)
    : arr;

export default flattenUnneeded;
