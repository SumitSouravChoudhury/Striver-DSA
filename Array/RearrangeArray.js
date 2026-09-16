const arr = [1, 2, -3, -5];

const rearrange = (arr) => {
  const result = [],
    pos = [],
    neg = [];

  for (let num of arr) {
    if (num < 0) {
      neg.push(num);
    } else {
      pos.push(num);
    }
  }

  let i = 0,
    j = 0;

  while (i < pos.length && j < neg.length) {
    result.push(pos[i]);
    result.push(neg[j]);
    i++;
    j++;
  }

  while (i < pos.length) {
    result.push(pos[i]);
    i++;
  }
  while (j < neg.length) {
    result.push(neg[j]);
    j++;
  }

  return result;
};

console.log(rearrange(arr));
