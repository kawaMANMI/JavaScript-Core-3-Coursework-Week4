function sales(carsSold) {
  totalSoldCars = {};
  carsSold.map((arrayElm) => {
    totalSoldCars[arrayElm.make] =
      (totalSoldCars[arrayElm.make] || 0) + arrayElm.price;
  });
  return totalSoldCars;
}

module.exports = sales;
