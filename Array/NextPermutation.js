const arr = [3, 2, 1];

const reverse = (arr, low, high) => {
  while (low < high) {
    [arr[low], arr[high]] = [arr[high], arr[low]];
    low++;
    high--;
  }
};

const nextPermutation = (arr) => {
  let breakingPoint = -1;

  for (let i = arr.length - 1; i >= 1; i--) {
    if (arr[i - 1] < arr[i]) {
      breakingPoint = i - 1;
      break;
    }
  }

  if (breakingPoint === -1) {
    reverse(arr, 0, arr.length - 1);
    return arr;
  }

  for (let i = arr.length - 1; i > breakingPoint; i--) {
    if (arr[i] > arr[breakingPoint]) {
      [arr[breakingPoint], arr[i]] = [arr[i], arr[breakingPoint]];
      break;
    }
  }

  reverse(arr, breakingPoint + 1, arr.length - 1);

  return arr;
};

console.log(nextPermutation(arr));
