const arr = [3, 1, -9, 8, 7, 22, 5, 0];
const temp = new Array(arr.length);

function merge(arr, temp, low, mid, high) {
  let i = low,
    j = mid + 1,
    k = low;

  while (i <= mid && j <= high) {
    if (arr[i] <= arr[j]) {
      temp[k++] = arr[i++];
    } else {
      temp[k++] = arr[j++];
    }
  }

  while (i <= mid) {
    temp[k++] = arr[i++];
  }
  while (j <= high) {
    temp[k++] = arr[j++];
  }

  for (let x = low; x <= high; x++) {
    arr[x] = temp[x];
  }
}

function mergeSort(arr, temp, low, high) {
  if (low < high) {
    let mid = Math.floor(low + (high - low) / 2);

    mergeSort(arr, temp, low, mid);
    mergeSort(arr, temp, mid + 1, high);

    merge(arr, temp, low, mid, high);
  }

  return arr;
}

console.log(mergeSort(arr, temp, 0, arr.length - 1));
