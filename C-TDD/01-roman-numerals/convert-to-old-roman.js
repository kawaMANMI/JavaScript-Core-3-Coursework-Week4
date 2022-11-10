function convertToOldRoman(n) {
  const standardArray = [1, 5, 10, 50, 100, 500, 1000];
  const oldRomanArray = ["I", "V", "X", "L", "C", "D", "M"];
  let arrayRemainders = [];
  let romStr = "";
  for (
    let indexArray = 0;
    indexArray < standardArray.length - 1;
    indexArray++
  ) {
    if (n >= standardArray[indexArray] && n <= standardArray[indexArray + 1]) {
      for (let i = 0; i <= indexArray; i++) {
        let rem = n % standardArray[indexArray - i];
        let num = Math.floor((n - rem) / standardArray[indexArray - i]);
        while (num != 0) {
          romStr += oldRomanArray[indexArray - i];
          num = num - 1;
        }
        n = rem;
      }
    }
  }
  return romStr;
}

//  console.log(convertToOldRoman(4));

 module.exports = convertToOldRoman;
