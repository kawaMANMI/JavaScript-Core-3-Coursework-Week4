function convertToNewRoman(n) {
  const standardArray = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  const newRomanArray = [
    "I",
    "IV",
    "V",
    "IX",
    "X",
    "XL",
    "L",
    "XC",
    "C",
    "CD",
    "D",
    "CM",
    "M",
  ];
  let arrayRemainders = [];
  let romStr = "";
  while (n > 0) {
    for (
      let indexArray = 0;
      indexArray < standardArray.length - 1;
      indexArray++
    ) {
      if (n >= standardArray[indexArray] && n < standardArray[indexArray + 1]) {
        romStr += newRomanArray[indexArray];
        n = n - standardArray[indexArray];
        console.log(n, romStr, indexArray);
      }
    }
  }

  return romStr;
}

// console.log(convertToNewRoman(88));
// // console.log(convertToNewRoman(88));
module.exports = convertToNewRoman;
