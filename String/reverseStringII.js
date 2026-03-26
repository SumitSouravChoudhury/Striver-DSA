const string = "abcde";

function reverseString(str, k) {
  str = str.split("");

  for (let i = 0; i < str.length; i += 2 * k) {
    let first = i;
    let last = Math.min(i + k - 1, str.length - 1);

    while (first < last) {
      let temp = str[first];
      str[first] = str[last];
      str[last] = temp;
      first++;
      last--;
    }
  }

  return str.join("");
}

console.log(reverseString(string, 3));
