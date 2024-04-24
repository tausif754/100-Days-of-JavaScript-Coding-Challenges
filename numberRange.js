// write a function called numberRange that generates containing consecutive numbers from a to b (inclusive)

function numberRange(a, b) {
  let arr = [];

  while (a <= b) {
    arr.push(a);
    a++;
  }
  return arr;
}
console.log(numberRange(0, 5));
console.log(numberRange(10, 40));
