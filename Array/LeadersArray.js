const arr = [10, 22, 12, 3, 0, 6];

function findLeaders(arr) {
  let n = arr.length,
    maxEle = arr[n - 1];
  let result = [];
  result.push(maxEle);

  for (let i = n - 2; i >= 0; i--) {
    if (arr[i] > maxEle) {
      maxEle = arr[i];
      result.push(maxEle);
    }
  }

  return result.reverse();
}

console.log(findLeaders(arr));
