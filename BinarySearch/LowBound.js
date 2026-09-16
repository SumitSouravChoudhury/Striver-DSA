const arr = [3, 5, 8, 15, 19];

const lowBound = (arr, x) => {
  let low = 0,
    high = arr.length - 1,
    ans = -1;

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);

    if (arr[mid] >= x) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return ans;
};

console.log(lowBound(arr, 9));
