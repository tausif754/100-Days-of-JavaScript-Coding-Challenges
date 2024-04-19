// find Mode
function findMode(arr) {
  let counts = {};
  let maxNum = 0;
  let mode;
  for (let elements of arr) {
    counts[elements] = (counts[elements] || 0) + 1;
    if (counts[elements] > maxNum) {
      maxNum = counts[elements];
      mode = elements;
    }
  }
  return mode;
}
console.log(findMode([1, 2, 2, 3, 1, 4, 2])); //output=2
