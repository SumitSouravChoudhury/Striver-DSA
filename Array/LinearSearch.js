const arr = [2, 1, 6, -9, 8, 3, 22, 0, -3];

function linearSearch(arr, x) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) {
      return i;
    }
  }

  return null;
}

console.log(linearSearch(arr, 55));
