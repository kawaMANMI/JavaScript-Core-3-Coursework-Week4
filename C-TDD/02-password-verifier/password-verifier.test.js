let verify = require("./password-verifier");

test("return  'Password accepted' if the conditions met", function () {
  // Arrange
  const password1 = "CYF-wm4";
  output1 = verify(password1);
  expect(output1).toEqual("Password rejected");

  const password2 = "CYF-wm-4";
  output2 = verify(password2);
  expect(output2).toEqual("Password accepted");

  const password3 = "CodeYourFuture";
  output3 = verify(password3);
  expect(output3).toEqual("Password rejected");

  const password4 = "CodeYourFuture-wm4";
  output4 = verify(password4);
  expect(output4).toEqual("Password accepted");
  // Act
  // Assert
});
