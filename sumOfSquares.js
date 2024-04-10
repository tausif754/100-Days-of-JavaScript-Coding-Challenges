// sum of squares

const sumOfSquares = (arr) => {
  //   return arr.reduce((accum, curElem) => (accum = accum + curElem * curElem), 0);
  let sum = 0;
  for (let curElem of arr) {
    sum = sum + curElem * curElem;
  }
  return sum;
};
console.log(sumOfSquares([1, 2, 3]));
