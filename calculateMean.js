// find the mean
const calculateMean = (arr) => {
  if (arr.length === 0) {
    return 0;
  }
  let sum = arr.reduce((accum, curElem) => accum + curElem);
  //   console.log(sum);
  return sum / arr.length;
};
console.log(calculateMean([1, 2, 3, 4, 5])); //output-3
console.log(calculateMean([-1, 0, 1]));
