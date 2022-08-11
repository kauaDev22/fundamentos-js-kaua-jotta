//function without return

function printSum(a, b) {
  console.log(a + b);
}

printSum(2, 4);

// function with return

function sum(a, b = 1) {
  return a + b;
}

console.log(sum(2, 3));
console.log(sum(2));
console.log(sum())
