Promise.myRace = function (promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      return reject(new TypeError("Argument must be an array"));
    }

    if (promises.length === 0) {
      return resolve([]);
    }

    for (let promise of promises) {
      Promise.resolve(promise).then(resolve).catch(reject);
    }
  });
};

const p1 = new Promise((res) => setTimeout(() => res("A"), 1000));
const p2 = new Promise((res) => setTimeout(() => res("B"), 500));

Promise.myRace([p1, p2]).then(console.log).catch(console.error);
