const arr = [7, 0, 0, 1, 7, 7, 2, 7, 7];

const majorityElement = (arr) => {
  let count = 0,
    ele;

  for (let i = 0; i < arr.length; i++) {
    if (count === 0) {
      count++;
      ele = arr[i];
    } else if (arr[i] === ele) {
      count++;
    } else {
      count--;
    }
  }

  let count1 = arr.filter((num) => num === ele).length;

  if (count1 > Math.floor(arr.length / 2)) {
    return ele;
  }

  return -1;
};

console.log(majorityElement(arr));
