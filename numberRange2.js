// number range recursive

function numberRange(a, b, arr = []) {
  //   var arr = [];

  if (a <= b) {
    arr.push(a);
    return numberRange(a + 1, b, arr);
  }
  return arr;
}

console.log(numberRange(0, 5)); //output-[0,1,2,3,4,5]
