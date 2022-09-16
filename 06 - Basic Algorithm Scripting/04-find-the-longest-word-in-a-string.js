function findLongestWordLength(str) {
  const words = str.split(' ');

  const biggestWord = words.reduce((acc, curr) => (
    curr.length > acc.length ?  curr : acc
  ), '').length;
  return biggestWord;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");