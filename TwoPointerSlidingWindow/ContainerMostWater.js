function mostWater(arr) {
  let i = 0,
    j = arr.length - 1;

  let maxArea = 0;

  while (i < j) {
    let area = Math.min(arr[i], arr[j]) * (j - i);
    maxArea = Math.max(maxArea, area);

    if (arr[i] < arr[j]) {
      i++;
    } else {
      j--;
    }
  }

  return maxArea;
}

const arr = [1, 8, 6, 2, 5, 4, 8, 3, 7];

console.log(mostWater(arr));
