// Array.filter((num, i, arr) => {})

Array.prototype.myFilter = function (cb) {
  let temp = [];

  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      temp.push(this[i]);
    }
  }

  return temp;
};

const nums = [1, 2, 3, 4, 7, 2, 4, 5];

const isGreater = nums.myFilter((num, i, arr) => {
  return num > 2;
});

console.log(isGreater);
