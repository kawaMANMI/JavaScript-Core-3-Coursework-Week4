function verify(password) {
  if (
    password == null ||
    password.length < 8 ||
    password.toLowerCase() === password ||
    !/\d/.test(password)
  ) {
    return "Password rejected";
  } else {
    return "Password accepted";
  }
}
module.exports = verify;

