const arr = [0, 2, 1, 0, 0, 0, 4, 0, 0, 0, 3];

function zeroesToEnd(arr) {
  let i = 0;

  for (let j = 0; j < arr.length; j++) {
    if (arr[j] !== 0) {
      arr[i++] = arr[j];
    }
  }

  while (i < arr.length) {
    arr[i++] = 0;
  }

  return arr;
}

console.log(zeroesToEnd(arr));
