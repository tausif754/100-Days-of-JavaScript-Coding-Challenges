// Simple bar chart from array data

const generaeBarChart = (arr) => {
  const newArr = arr.map((curElem, index) => {
    let star = "";
    let num = 0;
    while (num < curElem) {
      star = star + "*";
      num++;
    }
    return `${index + 1}: ${star}`;
  });
  console.log(newArr.join("\n"));
};
console.log(generaeBarChart([5, 3, 9, 2]));
