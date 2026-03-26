const string = "5240168";

function largestOddNumber(string) {
  let n = string.length - 1;

  while (n >= 0) {
    if (Number(string[n]) % 2 !== 0) {
      return string.substring(0, n + 1);
    }

    n--;
  }
}

console.log(largestOddNumber(string));
