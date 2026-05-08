const arr = [8, 2, 4, 5, 3, 7, 1];

const missingNumber = (arr) => {
  let n = arr.length + 1;

  const actualSum = Math.floor((n * (n + 1)) / 2);

  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return actualSum - sum;
};

console.log(missingNumber(arr));
