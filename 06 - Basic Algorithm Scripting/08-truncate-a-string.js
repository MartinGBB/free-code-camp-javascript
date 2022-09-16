function truncateString(str, num) {
  const separateStr = `${str.slice(0, num)}...`;
  const splitStr = num >= str.length ? str : separateStr;

  return splitStr;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);

truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)