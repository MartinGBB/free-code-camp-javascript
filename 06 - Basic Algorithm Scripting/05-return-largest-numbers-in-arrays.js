function largestOfFour(arr) {
  const biggerNumber = (acc, curr) => curr > acc ? curr : acc;
  const listArray = arr.map((numbers) => numbers.reduce(biggerNumber));

  return listArray
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);