const s = [5, 7, 2];
function editInPlace() {
  const lastElement = s.pop();
  // Using s = [2, 5, 7] would be invalid
  s.unshift(lastElement)
  return s;
}
editInPlace();
