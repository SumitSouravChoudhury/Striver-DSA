const countInversions = (arr) => {
  let count = 0;

  const merge = (low, mid, high) => {
    const temp = [];

    let i = low;
    let j = mid + 1;

    while (i <= mid && j <= high) {
      if (arr[i] <= arr[j]) {
        temp.push(arr[i]);
        i++;
      } else {
        temp.push(arr[j]);
        count += mid - i + 1;
        j++;
      }
    }

    while (i <= mid) {
      temp.push(arr[i]);
      i++;
    }

    while (j <= high) {
      temp.push(arr[j]);
      j++;
    }

    for (let k = low; k <= high; k++) {
      arr[k] = temp[k - low];
    }
  };

  const mergeSort = (low, high) => {
    if (low >= high) return;

    const mid = Math.floor((low + high) / 2);

    mergeSort(low, mid);
    mergeSort(mid + 1, high);

    merge(low, mid, high);
  };

  mergeSort(0, arr.length - 1);

  return count;
};

const arr = [5, 4, 3, 2, 1];

console.log(countInversions(arr));
