// write a function called truncateString that takes two parameters

function truncateString(str, count) {
  if (count <= 0) {
    return str;
  } else if (str.length > count) {
    return str.slice(0, count).concat("");
  }
}
console.log(truncateString("My name is Tausif Ahmad", 0)); //output- My name is Tausif Ahmad
console.log(truncateString("Hello How are you", 5));
