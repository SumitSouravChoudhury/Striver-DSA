const arr = [1, 4, 2, 2, 1];

const noAppearOnceOtherTwice = (arr) => {
  let xorr = 0;

  for (let i = 0; i < arr.length; i++) {
    xorr ^= arr[i];
  }

  return xorr;
};

console.log(noAppearOnceOtherTwice(arr));
