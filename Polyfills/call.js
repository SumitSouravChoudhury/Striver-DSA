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

Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error("Not a function");
  }

  context.fn = this;
  context.fn(...args);
};

getDetails.myCall(person, "Delhi", "India");
