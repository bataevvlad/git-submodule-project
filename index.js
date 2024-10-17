const submodule1 = require('./submodule-repo-1/math');
const submodule2 = require('./submodule-repo-2/math');
const subtree = require('./subtree-repo/math');

console.log("-----------------------");
console.log("Submodule 1 Operations:");
console.log("Addition (5 + 3):", submodule1.add(5, 3));
console.log("Subtraction (10 - 7):", submodule1.subtract(10, 7));
console.log("Multiply (10 * 7):", submodule1.multiply(10, 7));
console.log("-----------------------");
console.log("Submodule 2 Operations:");
console.log("Factorial (5):", submodule2.factorial(5));
console.log("Is Prime (11):", submodule2.isPrime(11));
console.log("-----------------------");
console.log("Subtree repo:");
console.log("Divide (5):", subtree.divide(10, 2));
console.log("Modulus (10 % 3):", subtree.modulus(10, 3));
console.log("-----------------------");
