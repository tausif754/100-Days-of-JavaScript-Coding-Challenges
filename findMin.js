// find minimum
const findMin = (arr) => {
  arr.sort((a, b) => a - b);
  console.log(arr);
  return arr[0];
};
console.log(findMin([5, 10, 2, 8])); //output-2
console.log(findMin([-7, 1, 0, 8, -9])); // output-9
