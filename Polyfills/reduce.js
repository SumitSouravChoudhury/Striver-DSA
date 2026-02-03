// Array.reduce((acc, curr, i, arr) => {}, initialValue)

Array.prototype.myReduce = function (cb, initialValue) {
  let accumulator = initialValue;

  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }

  return accumulator;
};

const nums = [1, 2, 3, 4];

const sum = nums.myReduce((acc, num) => {
  return acc + num;
});

const mul = nums.myReduce((acc, num) => {
  return acc * num;
});

console.log(mul);
