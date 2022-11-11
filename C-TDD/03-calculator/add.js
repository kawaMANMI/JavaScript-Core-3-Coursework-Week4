function add(numbers) {
  let sum = 0;
  if (numbers != "") {
    const arrayNumbers = numbers.split(",");
    for (let i = 0; i < arrayNumbers.length; i++) {
      sum += parseInt(arrayNumbers[i]);
    }
  }
  return sum;
}

module.exports = add;

// console.log(add("4,5"));
