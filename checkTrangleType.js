// check trangle type
const checkTrangleType = (a, b, c) => {
  if (a === b && b === c) {
    return "equilateral";
  }
  if (a === b || b === c || c === a) {
    return "isoscels";
  } else {
    return "scalene";
  }
};
console.log(checkTrangleType(3, 3, 3)); //equilateral trangle
console.log(checkTrangleType(3, 4, 3)); //isoscels
console.log(checkTrangleType(5, 8, 6)); //scalene
