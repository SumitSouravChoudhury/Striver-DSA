const arr = [8, 10, 5, 7, 9];

const secondLargestElement = (arr) => {
  let largest = -Infinity,
    secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    }
    if (arr[i] > secondLargest && arr[i] !== largest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest;
};

console.log(secondLargestElement(arr));
