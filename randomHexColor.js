// convert the random number into a hexadecimal string representation

function randomHexColor() {
  return `#${Math.random().toString(16).slice(2, 8).padEnd(6, 0)}`;
}
console.log(randomHexColor());
