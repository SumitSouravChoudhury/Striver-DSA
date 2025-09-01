const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function reverse(arr, start, end) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];

    start++;
    end--;
  }
}

function rotateByK(arr, k) {
  let n = arr.length;
  k = k % n;

  reverse(arr, 0, n - 1);
  reverse(arr, 0, k - 1);
  reverse(arr, k, n - 1);

  return arr;
}

console.log(rotateByK(arr, 3));
