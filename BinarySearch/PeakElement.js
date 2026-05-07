const arr = [1, 2, 1, 3, 5, 6, 4];

function peakElement(arr) {
  if (arr.length < 2) {
    return 0;
  }

  let l = 0,
    r = arr.length - 1;

  while (l < r) {
    let mid = l + Math.floor((r - l) / 2);

    if (arr[mid] < arr[mid + 1]) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }

  return l;
}

console.log(peakElement(arr));
