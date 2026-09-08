const arr = [7, 0, 0, 1, 7, 7, 2, 7, 7];

const majorityElement = (arr) => {
  let count = 0;
  let ele;

  for (const num of arr) {
    if (count === 0) {
      ele = num;
      count = 1;
    } else if (num === ele) {
      count++;
    } else {
      count--;
    }
  }

  count = 0;

  for (const num of arr) {
    if (num === ele) {
      count++;
    }
  }

  return count > arr.length / 2 ? ele : -1;
};

console.log(majorityElement(arr));
