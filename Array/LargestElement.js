const arr = [3, 1, -9, 8, 7, 22, 5, 0];

function largestElement(arr) {
  let max = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

console.log(largestElement(arr));
