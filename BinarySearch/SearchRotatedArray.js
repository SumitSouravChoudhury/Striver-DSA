const arr = [6, 7, 8, 0, 1, 2, 3, 4, 5];

function searchSortedArray(arr, target) {
  let l = 0,
    r = arr.length - 1;

  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2);

    if (arr[mid] === target) {
      return true;
    } else if (arr[l] <= arr[mid]) {
      if (target < arr[mid] && target >= arr[l]) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    } else {
      if (target > arr[mid] && target <= arr[r]) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
  }

  return false;
}

console.log(searchSortedArray(arr, 3));
