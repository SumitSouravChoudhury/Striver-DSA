const arr = [1, 1, 1, 2, 2, 3, 3, 3, 3, 4, 4];

const removeDuplicates = (arr) => {
  let j = 1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      arr[j++] = arr[i];
    }
  }

  return arr.slice(0, j);
};

console.log(removeDuplicates(arr));
