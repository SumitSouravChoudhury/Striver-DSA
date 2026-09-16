const rotateString = (s, goal) => {
  if (s.length !== goal.length) {
    return false;
  }

  const doubled = s + s;

  for (let i = 0; i < s.length; i++) {
    let j = 0;

    while (j < goal.length && doubled[i + j] === goal[j]) {
      j++;
    }

    if (j === goal.length) {
      return true;
    }
  }

  return false;
};

console.log(rotateString("rotation", "tionrota"));
