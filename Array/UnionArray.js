const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr2 = [2, 3, 4, 4, 5, 11, 12];

function union(arr1, arr2) {
  let n1 = arr1.length;
  let n2 = arr2.length;

  let result = [];

  let i = 0,
    j = 0;

  while (i < n1 && j < n2) {
    if (arr1[i] < arr2[j]) {
      if (arr1[i] !== result[result.length - 1]) {
        result.push(arr1[i]);
      }
      i++;
    } else if (arr2[j] < arr1[i]) {
      if (arr2[j] !== result[result.length - 1]) {
        result.push(arr2[j]);
      }
      j++;
    } else {
      if (arr1[i] !== result[result.length - 1]) {
        result.push(arr1[i++]);
      }
      i++;
      j++;
    }
  }

  while (i < n1) {
    if (arr1[i] !== result[result.length - 1]) {
      result.push(arr1[i]);
    }
    i++;
  }
  while (j < n2) {
    if (arr2[j] !== result[result.length - 1]) {
      result.push(arr2[j]);
    }
    j++;
  }

  return result;
}

console.log(union(arr1, arr2));
