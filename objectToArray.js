// convert Array to object

const obj = {
  name: "Tausif",
  age: 22,
  city: "Darbhanga",
};
// convert the object to an array of key-value pairs
let entries = Object.entries(obj);
console.log(entries);
console.log(entries.flat());
// convert the array of key-value pairs back to an object
let newObj = Object.fromEntries(entries);
console.log(newObj);
