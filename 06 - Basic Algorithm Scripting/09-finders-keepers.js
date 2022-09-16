function findElement(arr, func) {
  let validateTest = arr.map((number) => func(number));
  let indexNum = validateTest.indexOf(true);
  let num = arr?.[indexNum];
  
  return num;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);
findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })