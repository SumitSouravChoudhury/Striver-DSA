const r = 5,
  c = 3;

const pascalTriangle = (r, c) => {
  let n = r - 1;
  let k = c - 1;
  let result = 1;

  for (let i = 0; i < k; i++) {
    result *= n - i;
    result /= i + 1;
  }

  return result;
};

console.log(pascalTriangle(r, c));
