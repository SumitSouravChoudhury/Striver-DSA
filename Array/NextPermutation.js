const arr = [1, 3, 5, 4, 2];

function reverse(arr, low, high) {
  while (low < high) {
    [arr[low], arr[high]] = [arr[high], arr[low]];
    low++;
    high--;
  }
}

function nextPermutation(arr) {
  let n = arr.length;
  let bp = -1;

  for (let i = n - 2; i >= 0; i--) {
    if (arr[i] < arr[i + 1]) {
      bp = i;
      break;
    }
  }

  if (bp === -1) {
    reverse(arr, 0, n - 1);
    return arr;
  }

  for (let i = n - 1; i > bp; i--) {
    if (arr[i] > arr[bp]) {
      [arr[bp], arr[i]] = [arr[i], arr[bp]];
      break;
    }
  }

  reverse(arr, bp + 1, n - 1);

  return arr;
}

console.log(nextPermutation(arr));
