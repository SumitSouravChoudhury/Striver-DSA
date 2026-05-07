const arr = [8, 10, 5, 7, 9];

const largestElement = (arr) => {
  let maxEle = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxEle) {
      maxEle = arr[i];
    }
  }

  return maxEle;
};

console.log(largestElement(arr));
