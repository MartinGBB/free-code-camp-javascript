function repeatStringNumTimes(str, num) {
  let newStr = [];

  for (let repeat = 0; repeat < num; repeat += 1) {
    newStr.push(str);
  }
  return newStr.join('');
}

repeatStringNumTimes("abc", 3);