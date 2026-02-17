Promise.myAllSettled = function (promises) {
  return new Promise((resolve) => {
    if (!Array.isArray(promises)) {
      throw new TypeError("Argument must be an array");
    }

    const results = [];
    let completed = 0;

    if (promises.length === 0) {
      return resolve([]);
    }

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          results[index] = {
            status: "fulfilled",
            value: value,
          };
        })
        .catch((error) => {
          results[index] = {
            status: "rejected",
            reason: error,
          };
        })
        .finally(() => {
          completed++;
          if (completed === promises.length) {
            resolve(results);
          }
        });
    });
  });
};

const p1 = Promise.resolve(10);
const p2 = Promise.reject("Error");
const p3 = 5;

Promise.myAllSettled([p1, p2, p3]).then(console.log);
