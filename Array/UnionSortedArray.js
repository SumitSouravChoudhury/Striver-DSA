const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr2 = [2, 3, 4, 4, 5, 11, 12];

const union = (arr1, arr2) => {
  let result = [];

  let i = 0,
    j = 0;

  while (i < arr1.length && j < arr2.length) {
    let val;

    if (arr1[i] < arr2[j]) {
      val = arr1[i++];
    } else if (arr1[i] > arr2[j]) {
      val = arr2[j++];
    } else {
      val = arr1[i];
      i++;
      j++;
    }

    if (result[result.length - 1] !== val) {
      result.push(val);
    }
  }

  while (i < arr1.length) {
    if (result[result.length - 1] !== arr1[i]) {
      result.push(arr1[i]);
    }
    i++;
  }

  while (j < arr2.length) {
    if (result[result.length - 1] !== arr2[j]) {
      result.push(arr2[j]);
    }
    j++;
  }

  return result;
};

console.log(union(arr1, arr2));
