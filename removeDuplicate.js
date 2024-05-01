// remove duplicate from array

const removeDuplicate = (arr) => {
  return [...new Set(arr)];
};
console.log(removeDuplicate([1, 2, 3, 3, 4, 5, 5, 6]));
