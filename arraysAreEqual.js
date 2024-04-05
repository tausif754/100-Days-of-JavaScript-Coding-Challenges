// check whether the arrays are equal or not
const arraysAreEquals = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  return arr1.every((curVal, index) => curVal === arr2[index]);
};
console.log(arraysAreEquals([1, 2, 3], [1, 2, 3])); //output- true
console.log(arraysAreEquals([1, 2, 3, 4], [1, 2, 3])); // output - false;
