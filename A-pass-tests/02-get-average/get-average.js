// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers) {
  let sumNumber = 0;
  let count = 0;
  //   let arrayOnlyNumbers=numbers.filter(arrayElm => typeof)
  for (const numberElm of numbers) {
    if (typeof numberElm === "number") {
      sumNumber += numberElm;
      count++;
    }
  }
  return sumNumber / count;
}
module.exports = average;
