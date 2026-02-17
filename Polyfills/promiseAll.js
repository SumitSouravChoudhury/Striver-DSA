Promise.myAll = function (promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      return reject(new TypeError("Argument must be an array"));
    }

    const results = [];
    let completed = 0;

    if (promises.length === 0) {
      return resolve([]);
    }

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          results[index] = value;
          completed++;

          if (completed === promises.length) {
            resolve(results);
          }
        })
        .catch(reject);
    });
  });
};

const p1 = new Promise((res, rej) => setTimeout(() => res(1), 1000));
const p2 = new Promise((res, rej) => setTimeout(() => rej(2), 500));

Promise.myAll([p1, p2]).then(console.log).catch(console.error);
