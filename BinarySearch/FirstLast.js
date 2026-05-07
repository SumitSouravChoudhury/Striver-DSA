const nums = [5, 7, 7, 8, 8, 10];

function firstLast(arr, target) {
  function firstOccurrence() {
    let l = 0,
      r = arr.length - 1;

    let ans = -1;

    while (l <= r) {
      let mid = l + Math.floor((r - l) / 2);

      if (arr[mid] === target) {
        ans = mid;
        r = mid - 1;
      } else if (arr[mid] < target) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }

    return ans;
  }
  function lastOccurrence() {
    let l = 0,
      r = arr.length - 1;

    let ans = -1;

    while (l <= r) {
      let mid = l + Math.floor((r - l) / 2);

      if (arr[mid] === target) {
        ans = mid;
        l = mid + 1;
      } else if (arr[mid] < target) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }

    return ans;
  }

  return [firstOccurrence(), lastOccurrence()];
}

console.log(firstLast(nums, 8));
