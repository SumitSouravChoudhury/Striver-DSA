// 1. this in global space
console.log(this); // global object

// 2. this inside a function
function func() {
  // the value of this depends in strict/non-strict mode
  // strict mode: undefinded
  // non-strict mode: global object
  console.log(this);
}
func();

// NOTE: (this substitution)
// If the value of this keyword is undefined or null then it is replaced with global object only in non-strict mode

// 3. this inside object's method
const obj = {
  a: "10",
  b: function () {
    console.log(this);
  },
};
obj.b(); // obj

// 4. call, apply, bind method
const student1 = {
  name: "Sumit",
  city: "Bengaluru",
};
const student2 = {
  name: "Santosh",
  city: "Madurai",
};
function getDetails() {
  console.log(`Hi ${this.name}, you are from ${this.city}`);
}
getDetails.call(student1);
getDetails.call(student2);

// 5. this inside nested arrow function
const obj1 = {
  a: 10,
  x: function () {
    const y = () => {
      console.log(this);
    };
    y();
  },
};
obj1.x();
