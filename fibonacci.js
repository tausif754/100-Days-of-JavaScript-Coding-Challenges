// Fibonacci using Recursion

function fibonacci(num) {
  if (num <= 1) {
    return num;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
}
console.log(fibonacci(5)); //output-5
console.log(fibonacci(0)); //output-0
