// power of two

const isPowerOfTwo = (num) => {
  let flag = false;
  for (let i = 1; i < num; i++) {
    if (2 ** i === num) {
      flag = true;
    }
  }
  return flag;
};
console.log(isPowerOfTwo(8)); //output-true
console.log(isPowerOfTwo(-8)); //output-false

// console.log(isPowerOfTwo(8)); //output-true
// console.log(isPowerOfTwo(7)); //output-false
