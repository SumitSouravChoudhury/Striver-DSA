const arr = [1, 2, 3, 4, 5];
let k = 8;

const swap = (arr, i, j) => {
  while (i < j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++;
    j--;
  }
};

const rotateByK = (arr, k) => {
  k = k % arr.length;

  swap(arr, 0, arr.length - 1);
  swap(arr, 0, arr.length - 1 - k);
  swap(arr, arr.length - k, arr.length - 1);

  return arr;
};

console.log(rotateByK(arr, k));
