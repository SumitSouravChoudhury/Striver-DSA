const arr = [1, 0, 2, 3, 0, 4, 0, 1];

const moveZeroes = (arr) => {
  let j = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[j++] = arr[i];
    }
  }

  while (j < arr.length) {
    arr[j++] = 0;
  }

  return arr;
};

console.log(moveZeroes(arr));
