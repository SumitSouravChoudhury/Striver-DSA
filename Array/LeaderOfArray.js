const arr = [10, 22, 12, 3, 0, 6];

const leader = (arr) => {
  let maxEle = -Infinity;
  const result = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] > maxEle) {
      result.unshift(arr[i]);
      maxEle = arr[i];
    }
  }

  return result;
};

console.log(leader(arr));
