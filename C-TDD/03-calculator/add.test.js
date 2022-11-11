let add = require("./add");

test("Sum of the numbers in a string", function () {
  // Arrange
  const numbers1 = "";
  output1 = add(numbers1);
  expect(output1).toEqual(0);

  const numbers2 = "3, 5, 9";
  output2 = add(numbers2);
  expect(output2).toEqual(17);

  const numbers3 = "3, 5, 9, 1003";
  output3 = add(numbers3);
  expect(output3).toEqual(17);

  // Act
  // Assert
});
