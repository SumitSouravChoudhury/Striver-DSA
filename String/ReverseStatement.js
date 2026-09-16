const reverseWords = (str) => {
  let word = "";
  const words = [];

  for (let i = 0; i <= str.length; i++) {
    if (i === str.length || str[i] === " ") {
      if (word.length > 0) {
        words.push(word);
        word = "";
      }
    } else {
      word += str[i];
    }
  }

  let result = "";

  for (let i = words.length - 1; i >= 0; i--) {
    result += words[i];

    if (i !== 0) {
      result += " ";
    }
  }

  return result;
};

console.log(reverseWords(" amazing coding skills "));
