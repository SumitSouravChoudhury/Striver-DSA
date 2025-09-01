const arr = [3, 1, -9, 8, 7, 22, 5, 0];

function isSorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }

  return true;
}

console.log(isSorted(arr));
