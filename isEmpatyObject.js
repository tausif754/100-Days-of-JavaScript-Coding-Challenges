// is Empaty object
function isEmpatyObject(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      return `it is not empaty`;
    }
  }
  return `it is empaty`;
}
console.log(isEmpatyObject({ name: "Tausif" })); //output-is not empaty
console.log(isEmpatyObject({})); // output-it is empaty
