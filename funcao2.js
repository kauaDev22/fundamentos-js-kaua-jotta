//Armazening a function in a variable
const printSum = function (a, b) {
  console.log(a + b);
};

printSum(2, 3);

// Armazening a arrow function in a variable

const sum = (a, b) => {
  return a + b;
};
console.log(sum(4, 5));

// implicit return
const subtraction = (a, b) => a - b;

console.log(subtraction(9, 87))


const print = a => console.log(a);

print('legal')