let getLargestNumber = require("./largest-number");

test("returns largest number in array", function () {
  // Arrange
  let myArray = [3, 21, 88, 4, 36];
  let expectedResult = 88;
  let result = getLargestNumber(myArray)
  // Act


  // Assert
  expect(result).toEqual(expectedResult);
});

// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed
