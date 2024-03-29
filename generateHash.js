// Hash tag generator
const generateHash = (str) => {
  if (str.length > 2800 || str.trim().length === 0) {
    return false;
  }
  str = str.split(" ");
  str = str.map((curElem) =>
    curElem.replace(curElem[0], curElem[0].toUpperCase())
  );
  str = `#${str.join("")}`;
  return str;
};
console.log(generateHash("my name is tausif ahmad"));
