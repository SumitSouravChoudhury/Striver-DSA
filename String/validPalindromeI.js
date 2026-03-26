const string = "A man, a plan, a canal: Panama";

function validPalindrome(string) {
  string = string.toLowerCase();
  let filteredString = "",
    rev = "";

  for (let i = 0; i < string.length; i++) {
    if (string[i].match(/[a-z0-9]/i)) {
      filteredString += string[i];
      rev = string[i] + rev;
    }
  }

  return filteredString === rev;
}

console.log(validPalindrome(string));
