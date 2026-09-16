const words = ["flower", "flow", "flight"];

const longestCommonPrefix = (words) => {
  let prefix = words[0];

  for (let i = 1; i < words.length; i++) {
    let j = 0;
    let word = words[i];

    while (j < prefix.length && j < word.length && prefix[j] === word[j]) {
      j++;
    }

    prefix = prefix.substring(0, j);

    if (prefix.length === 0) {
      return "";
    }
  }

  return prefix;
};

console.log(longestCommonPrefix(words));
