let convertToNewRoman = require("./convert-to-new-roman");

test("returns I if passed 1 as an argument", function () {
  const myNumber = 44;
  const expectedResult = "XLIV";
  output = convertToNewRoman(myNumber);
  expect(output).toEqual(expectedResult);
});
