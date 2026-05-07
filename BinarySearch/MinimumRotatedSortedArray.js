const arr = [3, 4, 5, 6, 7, 1, 2];

function findMin(nums) {
  let l = 0;
  let r = nums.length - 1;

  while (l < r) {
    let mid = l + Math.floor((r - l) / 2);

    if (nums[mid] > nums[r]) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }

  return nums[l];
}

console.log(findMin(arr));
