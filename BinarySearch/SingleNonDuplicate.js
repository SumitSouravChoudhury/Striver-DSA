function singleNonDuplicate(nums) {
  let l = 0,
    r = nums.length - 1;

  while (l < r) {
    let mid = l + Math.floor((r - l) / 2);

    if (mid % 2 === 1) mid--;

    if (nums[mid] === nums[mid + 1]) {
      l = mid + 2;
    } else {
      r = mid;
    }
  }

  return nums[l];
}

console.log(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8]));
