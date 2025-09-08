const n = 7;

function pascalTriangle(n) {
  let ans = 1;
  console.log(ans + " ");

  for (let i = 1; i < n; i++) {
    ans = ans * (n - i);
    ans = ans / i;
    console.log(ans + "");
  }
}

pascalTriangle(n);
