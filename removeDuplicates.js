// write a function that takes an array of integers as input and removes
// any duplicate elements , returning a new array with only the unique elements.

const removeDuplicates = (arr) => {
  let newArr = [...new Set(arr)];
  return newArr;
};

console.log(removeDuplicates([1, 2, 3, 2, 1, 4])); //output-
