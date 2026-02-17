Array.prototype.mySort = function (compareFn) {
  if (typeof compareFn !== "function") {
    compareFn = function (a, b) {
      a = String(a);
      b = String(b);
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    };
  }

  const arr = this;

  function quickSort(left, right) {
    if (left >= right) return;

    const pivotIndex = partition(left, right);
    quickSort(left, pivotIndex - 1);
    quickSort(pivotIndex + 1, right);
  }

  function partition(left, right) {
    const pivot = arr[right];
    let i = left - 1;

    for (let j = left; j < right; j++) {
      if (compareFn(arr[j], pivot) < 0) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }

    [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
    return i + 1;
  }

  quickSort(0, arr.length - 1);

  return arr;
};

[5, 2, 9, 1].mySort((a, b) => a - b);
[10, 2, 5].mySort();
