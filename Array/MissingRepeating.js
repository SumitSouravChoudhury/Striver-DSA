const arr = [1, 2, 3, 4, 5, 5, 7];

const missingRepeating = (arr) => {
  let xor = 0;

  for (let i = 0; i < arr.length; i++) {
    xor ^= arr[i];
    xor ^= i + 1;
  }

  const bit = xor & -xor;

  let x = 0,
    y = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] & bit) {
      x ^= arr[i];
    } else {
      y ^= arr[i];
    }

    if ((i + 1) & bit) {
      x ^= i + 1;
    } else {
      y ^= i + 1;
    }
  }

  let missing, repeating;

  for (let num of arr) {
    if (num === x) {
      repeating = x;
      missing = y;
      return [missing, repeating];
    }
    if (num === y) {
      repeating = y;
      missing = x;
      return [missing, repeating];
    }
  }
};

console.log(missingRepeating(arr));
