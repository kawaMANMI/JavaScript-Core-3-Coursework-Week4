function add(numbers) {
  let sum = 0;
  if (numbers != "") {
    const arrayNumbers = numbers.split(",").map((num) => parseInt(num));
    const negativeNumbers = arrayNumbers.filter((num) => num < 0);
    if (negativeNumbers.length > 0) {
      return `negatives not allowed: ${negativeNumbers} `;
    }
    for (let i = 0; i < arrayNumbers.length; i++) {
      if (arrayNumbers[i] <= 1000) {
        sum += arrayNumbers[i];
      }
    }
  }
  return sum;
}

// module.exports = add;

console.log(add("3, 5, -2"));
