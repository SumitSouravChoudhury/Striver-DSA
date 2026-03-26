const string = "fly   to the    moooon   ";

function lengthLastWord(str) {
  let curr = str.length - 1;
  let length = 0;

  while (curr >= 0 && str[curr] === " ") {
    curr--;
  }

  while (curr >= 0 && str[curr] !== " ") {
    length++;
    curr--;
  }

  return length;
}

console.log(lengthLastWord(string));
