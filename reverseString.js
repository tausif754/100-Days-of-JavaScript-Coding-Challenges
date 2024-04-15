// Reverse string
const reverseString = (str) => {
  let n = str.length - 1;
  let reverseString = "";

  for (let i = n; i >= 0; i--) {
    // console.log(str[i]);
    reverseString += str[i];
  }
  return reverseString;
};
console.log(reverseString("hello"));
