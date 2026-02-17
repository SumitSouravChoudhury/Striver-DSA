Promise.myAny = function (promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      return reject(new TypeError("Argument must be an array"));
    }

    let errors = [];
    let rejectedCount = 0;

    if (promises.length === 0) {
      return reject(new AggregateError([], "All promises were rejected"));
    }

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then(resolve)
        .catch((error) => {
          errors[index] = error;
          rejectedCount++;

          if (rejectedCount === promises.length) {
            reject(new AggregateError(errors, "All promises were rejected"));
          }
        });
    });
  });
};

const p1 = Promise.reject("Error1");
const p2 = new Promise((res) => setTimeout(() => res("Success"), 500));
const p3 = Promise.reject("Error3");

Promise.myAny([p1, p2, p3]).then(console.log).catch(console.error);
