let convertToOldRoman = require("./convert-to-old-roman");

test("returns I if passed 1 as an argument", function () {
  // Arrange
  const myNumber = 88;
  const expectedResult = "LXXXVIII";
  output = convertToOldRoman(myNumber);
  expect(output).toEqual(expectedResult);
  // Act
  // Assert
});
