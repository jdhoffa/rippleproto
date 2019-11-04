const reduceBrackets = strArr => {
  strArr = JSON.stringify(strArr);
  const regEx1 = /\[\[(\["\w+\.\d+","\w+\.\d+"\])\]\]/;
  while (regEx1.test(strArr)) strArr = strArr.replace(regEx1, "$1");

  const regEx2 = /\[(\["\w+\.\d+")\]/;
  while (regEx2.test(strArr)) strArr = strArr.replace(regEx2, "$1");

  let arr = JSON.parse(strArr);
  while (
    Array.isArray(arr[0]) &&
    Array.isArray(arr[0][0]) &&
    arr.length === 1 &&
    arr[0].length === 1
  )
    arr = arr[0][0];

  return arr;
};

export default reduceBrackets;
