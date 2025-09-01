const arr = [1, 1, 0, 1, 1, 1];

function maxConseqOnes(arr) {
  let one_count = 0,
    max_one_count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      one_count++;
    } else {
      one_count = 0;
    }

    max_one_count = Math.max(max_one_count, one_count);
  }

  return max_one_count;
}

console.log(maxConseqOnes(arr));
