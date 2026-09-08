const arr = [2, 1, 4, 1, 2];

const findUnique = (arr) => {
  let xor = 0;

  for (let i = 0; i < arr.length; i++) {
    xor ^= arr[i];
  }

  return xor;
};

console.log(findUnique(arr));
