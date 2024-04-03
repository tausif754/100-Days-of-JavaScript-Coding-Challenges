// Max in the array
const findMax = (arr) => {
  //   return Math.max(10, 20, 100, 600, 2);
  return Math.max(...arr);
};
// console.log(findMax());
console.log(findMax([1, 5, 3, 9, 2]));
console.log(findMax([-10, -5, -3, -9, -2]));
