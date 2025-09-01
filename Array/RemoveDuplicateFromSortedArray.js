const arr = [1, 2, 2, 5, 6, 8, 8, 8, 8, 8, 8, 9];

function removeDuplicates(arr) {
  let i = 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[j] !== arr[i]) {
      i++;
      arr[i] = arr[j];
    }
  }

  return i + 1;
}

const newLength = removeDuplicates(arr);

for (let i = 0; i < newLength; i++) {
  console.log(arr[i]);
}
