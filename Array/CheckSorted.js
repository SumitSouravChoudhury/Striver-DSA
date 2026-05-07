const arr = [4, 5, 6, 7, 8];

const isSorted = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }

  return true;
};

console.log(isSorted(arr));
