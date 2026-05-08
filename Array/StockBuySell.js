const arr = [7, 1, 5, 3, 6, 4];

const stockBuySell = (arr) => {
  let maxDiff = 0,
    minPrice = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minPrice) {
      minPrice = arr[i];
    }

    maxDiff = Math.max(maxDiff, arr[i] - minPrice);
  }

  return maxDiff;
};

console.log(stockBuySell(arr));
