const arr = [3, 2, 1, 5, 6, 4];

const kthLargest = (arr, k) => {
  const target = arr.length - k;

  const quickSelect = (low, high) => {
    let pivot = arr[high];
    let i = low;

    for (let j = low; j < high; j++) {
      if (arr[j] <= pivot) {
        [arr[j], arr[i]] = [arr[i], arr[j]];
        i++;
      }
    }

    [arr[i], arr[high]] = [arr[high], arr[i]];

    if (i === target) {
      return arr[i];
    }
    if (i < target) {
      return quickSelect(i + 1, high);
    }
    return quickSelect(low, i - 1);
  };

  return quickSelect(0, arr.length - 1);
};

console.log(kthLargest(arr, 2));
