Function.prototype.myDebounce = function (delay) {
  const fn = this;
  let timer;

  return function (...args) {
    const context = this;

    clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
};

function print(msg) {
  console.log(msg);
}

const debouncedPrint = print.myDebounce(1000);

debouncedPrint("Hello");
debouncedPrint("World");
