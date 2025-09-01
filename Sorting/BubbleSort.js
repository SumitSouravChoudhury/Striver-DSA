const arr = [3, 1, -9, 8, 7, 22, 5, 0];

function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let swapped = false;

    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swapped = true;

        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }

    if (swapped === false) {
      break;
    }
  }

  return arr;
}

console.log(bubbleSort(arr));
