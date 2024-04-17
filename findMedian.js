// Find Median
const findMedian = (arr) => {
  //   console.log(arr.sort((a, b) => a - b));
  arr.sort((a, b) => a - b);
  let l = arr.length;
  let mid = Math.floor(l / 2);
  //for even length
  if (l % 2 === 0) {
    return (arr[mid] + arr[mid - 1]) / 2;
  } else {
    //for odd length
    return arr[mid];
  }
};
console.log(findMedian([5, 3, 90, 1, 7])); //output-5
console.log(findMedian([2, 4, 6, 8])); //output-5
