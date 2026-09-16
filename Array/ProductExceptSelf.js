const arr = [1, 2, 0, 4];

const productExceptSelf = (arr) => {
  let pref = 1;
  const result = new Array(arr.length).fill(1);

  for (let i = 0; i < arr.length; i++) {
    result[i] = pref;
    pref *= arr[i];
  }

  let suf = 1;

  for (let i = arr.length - 1; i >= 0; i--) {
    result[i] *= suf;
    suf *= arr[i];
  }

  return result;
};

console.log(productExceptSelf(arr));
