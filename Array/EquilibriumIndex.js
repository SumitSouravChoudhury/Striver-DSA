const arr = [-7, 1, 5, 2, -4, 3, 0];

const equilibriumIndex = (arr) => {
  let totalSum = 0;

  for (let num of arr) {
    totalSum += num;
  }

  let leftSum = 0;

  for (let i = 0; i < arr.length; i++) {
    let rightSum = totalSum - leftSum - arr[i];

    if (leftSum === rightSum) {
      return i;
    }

    leftSum += arr[i];
  }

  return -1;
};

console.log(equilibriumIndex(arr));
