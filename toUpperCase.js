// write a function to check if a character is uppercase or lowercase
const isUpperCase = (char) => {
  if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
    return true;
  }
  return false;
};
console.log(isUpperCase("S")); //output-true
console.log(isUpperCase("a")); //output-false
