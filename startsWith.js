// starts with

const startsWith = (str, subStr) => {
  return str.toLowerCase().startsWith(subStr.toLowerCase());
};
console.log(startsWith("Hello world", "hello")); //output-true
console.log(startsWith("hello", "world")); //output-false
