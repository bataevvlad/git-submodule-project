const submodule1 = require('./submodule-repo-1');
const submodule2 = require('./submodule-repo-2');

console.log("Basic Operations:");
console.log("Addition (5 + 3):", submodule1.add(5, 3));
console.log("Subtraction (10 - 7):", submodule1.subtract(10, 7));

console.log("Advanced Operations:");
console.log("Factorial (5):", submodule2.factorial(5));
console.log("Is Prime (11):", submodule2.isPrime(11));
