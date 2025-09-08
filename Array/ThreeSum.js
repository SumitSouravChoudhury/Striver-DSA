const arr = [-1, 0, 1, 2, -1, -4];
const target = 0;

function threeSum(arr, target) {
  let n = arr.length;
  let result = [];
  arr.sort((a, b) => a - b);

  for (let i = 0; i < n; i++) {
    if (i !== 0 && arr[i] === arr[i - 1]) {
      continue;
    }

    let j = i + 1;
    let k = n - 1;

    while (j < k) {
      if (arr[i] + arr[j] + arr[k] < target) {
        j++;
      } else if (arr[i] + arr[j] + arr[k] > target) {
        k--;
      } else {
        result.push([arr[i], arr[j], arr[k]]);
        j++;
        k--;

        while (j < k && arr[j] === arr[j - 1]) {
          j++;
        }
        while (j < k && arr[k] === arr[k + 1]) {
          k--;
        }
      }
    }
  }

  return result;
}

console.log(threeSum(arr, target));
