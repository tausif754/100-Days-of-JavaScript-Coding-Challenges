// is Empity object
function isEmpityObject(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      return `it is not empity`;
    }
  }
  return `it is empity`;
}
console.log(isEmpityObject({ name: "Tausif" })); //output-is not empity
console.log(isEmpityObject({})); // output-it is empity
