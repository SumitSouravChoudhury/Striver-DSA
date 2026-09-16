const arr = [1, 0, 2, 3, 0, 0, 0, 4, 1];

const moveZeroes = (arr) => {
  let j = 0,
    i = 0;

  while (i < arr.length) {
    if (arr[i] !== 0) {
      [arr[j], arr[i]] = [arr[i], arr[j]];
      j++;
    }
    i++;
  }

  return arr;
};

console.log(moveZeroes(arr));
