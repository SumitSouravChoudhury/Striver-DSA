const string = "successes";

function freqVowelConsonant(str) {
  let myMap = new Map();
  let vowels = new Set(["a", "e", "i", "o", "u"]);

  let maxVowelCount = 0;
  let maxConsonantCount = 0;

  for (let char of str) {
    let count = (myMap.get(char) || 0) + 1;
    myMap.set(char, count);

    if (vowels.has(char)) {
      maxVowelCount = Math.max(maxVowelCount, count);
    } else {
      maxConsonantCount = Math.max(maxConsonantCount, count);
    }
  }

  return maxVowelCount + maxConsonantCount;
}

console.log(freqVowelConsonant(string));
