// Longest word in the String
const findLongestWord = (str) => {
  if (str.trim().length === 0) {
    return false;
  }
  words = str.split(" ");
  //   console.log(words);
  words = words.sort((a, b) => a.length - b.length);
  //   return words[0];
  return words.at(-1);
};
console.log(findLongestWord("My name is Tausif Ahmad"));
