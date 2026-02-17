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

Function.prototype.myApply = function (context = {}, args = []) {
  if (typeof this !== "function") {
    throw new Error("Not a function");
  }

  if (!Array.isArray(args)) {
    throw new Error("Create an array of arguments");
  }

  context.fn = this;
  context.fn(...args);
};

getDetails.myApply(person, ["Delhi", "India"]);
