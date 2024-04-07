// write a function that takes a number as input and return the sum of digits

function sumOfDigits(num) {
  let sum = 0;
  while (num > 0) {
    let rem = num % 10;
    sum += rem;
    num = Math.floor(num / 10);
  }
  return sum;
}
console.log(sumOfDigits(123)); //output=6
console.log(sumOfDigits(123456)); //output=21
