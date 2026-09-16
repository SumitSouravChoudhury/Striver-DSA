const arr = [3, 4, 6, 7, 9, 12, 16, 17];

const binarySearch = (arr, x) => {
  let low = 0,
    high = arr.length - 1;

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);

    if (arr[mid] === x) {
      return mid;
    } else if (arr[mid] > x) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return -1;
};

console.log(binarySearch(arr, 12));
