const person = {
  name: "Sumit",
  age: 24,
};

const getDetails = function (city, country) {
  console.log(
    this.name +
      " " +
      "of age " +
      this.age +
      " " +
      "lives in" +
      " " +
      city +
      "," +
      country,
  );
};

Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error("Not a function");
  }

  context.fn = this;
  return function (...newArgs) {
    return context.fn(...args, ...newArgs);
  };
};

const newFunc = getDetails.myBind(person, "Delhi", "India");
console.log(newFunc());
