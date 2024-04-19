// return the counts objects

const numbers = [1, 2, 2, 3, 4, 2];
let counts = {};
for (let elements of numbers) {
  counts[elements] = (counts[elements] || 0) + 1;
}
console.log(counts);
