let removeVowelsFromWords = require("./remove-vowels-in-array");

test("remove vowels from all words in array", function () {
  // Arrange
  let words = ["Irina", "Etza", "Daniel"];
  let output = removeVowelsFromWords(words);
  // Act
  let expectedResult = ["rn", "tz", "Dnl"];
  // Assert

  expect(output).toEqual(expectedResult);
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
