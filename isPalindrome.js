// valid palindrome
var isPalindrome = function (s) {
  s = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  let reverseString = s.split("").reverse().join("");
  console.log(reverseString);
  return s === reverseString ? true : false;
};
console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
