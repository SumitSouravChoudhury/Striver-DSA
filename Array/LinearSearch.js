const arr = [1, 2, 3, 4, 5];
const target = 3;

const linearSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }

  return -1;
};

console.log(linearSearch(arr, target));
