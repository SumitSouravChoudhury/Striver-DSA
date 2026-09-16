const num1 = [-5, -2, 4, 5, 0, 0, 0],
  num2 = [-3, 1, 8];

const merge = (num1, num2) => {
  let m = num1.length - num2.length;
  let n = num2.length;

  let i = m - 1,
    j = n - 1,
    k = num1.length - 1;

  while (i >= 0 && j >= 0) {
    if (num1[i] > num2[j]) {
      num1[k--] = num1[i--];
    } else {
      num1[k--] = num2[j--];
    }
  }

  while (j >= 0) {
    num1[k--] = num2[j--];
  }

  return num1;
};

console.log(merge(num1, num2));
