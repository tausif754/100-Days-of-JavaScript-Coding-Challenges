// find the average
const calculateAverage = (arr) => {
  let n = arr.length;
  let total = arr.reduce((accum, curElem) => accum + curElem);
  console.log(total);
  return total / n;
};
console.log(calculateAverage([5, 10, 2, 8])); //output=6.25
