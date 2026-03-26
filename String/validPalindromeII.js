const string = "A man, a plan, a canal: Panama";

function validPalindrome(string) {
  string = string.toLowerCase();

  let i = 0,
    j = string.length - 1;

  while (i < j) {
    while (!string[i].match(/[a-z0-9]/i)) {
      i++;
    }
    while (!string[j].match(/[a-z0-9]/i)) {
      j--;
    }

    if (string[i] !== string[j]) {
      return false;
    }

    i++;
    j--;
  }

  return true;
}

console.log(validPalindrome(string));
