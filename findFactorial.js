// find the factorial

function findFactorial(num) {
  if (num === 1) {
    return 1;
  } else {
    return num * findFactorial(num - 1);
  }
}
console.log(findFactorial(5)); //output-120
