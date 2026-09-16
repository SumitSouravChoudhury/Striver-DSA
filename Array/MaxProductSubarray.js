const arr = [1, 2, -3, 0, -4, -5];

const maxProduct = (arr) => {
  let max = arr[0],
    currMax = arr[0],
    currMin = arr[0];

  for (let i = 1; i < arr.length; i++) {
    let curr = arr[i];

    if (curr < 0) {
      [currMax, currMin] = [currMin, currMax];
    }

    currMax = Math.max(curr, currMax * curr);
    currMin = Math.min(curr, currMin * curr);

    max = Math.max(max, currMax);
  }

  return max;
};

console.group(maxProduct(arr));
