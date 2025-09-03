const arr = [7, 1, 5, 3, 6, 4];

function stockBuySell(arr) {
  let maxProfit = 0,
    minPrice = Number.MAX_VALUE;

  for (let i = 0; i < arr.length; i++) {
    if (minPrice > arr[i]) {
      minPrice = arr[i];
    }

    maxProfit = Math.max(maxProfit, arr[i] - minPrice);
  }

  return maxProfit;
}

console.log(stockBuySell(arr));
