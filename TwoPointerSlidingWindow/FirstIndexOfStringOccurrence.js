function find(str1, str2) {
  let n = str1.length,
    m = str2.length;

  for (let i = 0; i <= n - m; i++) {
    let j = 0;
    for (; j < m; j++) {
      if (str1[i + j] !== str2[j]) {
        break;
      }
    }

    if (j === m) {
      return i;
    }
  }

  return -1;
}

console.log(find("sdbutsad", "sad"));
