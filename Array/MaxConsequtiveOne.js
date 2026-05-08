const arr = [1, 1, 0, 1, 1, 1];

const maxConsecutiveOnes = (arr) => {
  let max = 0,
    maxCount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      maxCount++;
      max = Math.max(max, maxCount);
    } else {
      maxCount = 0;
    }
  }
  return max;
};

console.log(maxConsecutiveOnes(arr));
