const arr = [4, 4, 2, 4, 3, 4, 4, 3, 2, 4];

function majorityElement(arr) {
  let count = 0,
    ele;

  for (let i = 0; i < arr.length; i++) {
    if (count === 0) {
      count = 1;
      ele = arr[i];
    } else if (ele === arr[i]) {
      count++;
    } else {
      count--;
    }
  }

  let count1 = 0;
  for (let i = 0; i < arr.length; i++) {
    if (ele === arr[i]) {
      count1++;
    }
  }

  if (count1 > Math.floor(arr.length / 2)) {
    return ele;
  }

  return -1;
}

console.log(majorityElement(arr));
