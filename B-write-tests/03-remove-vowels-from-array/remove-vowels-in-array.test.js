let removeVowelsFromWords = require("./remove-vowels-in-array");

test("remove vowels from all words in array", function () {
  // Arrange
  let words1 = ["Irina", "Etza", "Daniel"];
  let output1 = removeVowelsFromWords(words1);
  // Act
  let expectedResult1 = ["rn", "tz", "Dnl"];
  // Assert

  let words2 = ["School", "Pen", "Paper"];
  let output2 = removeVowelsFromWords(words2);
  // Act
  let expectedResult2 = ["Schl", "Pn", "Ppr"];
  // Assert

  expect(output1).toEqual(expectedResult1);
  expect(output2).toEqual(expectedResult2);
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
