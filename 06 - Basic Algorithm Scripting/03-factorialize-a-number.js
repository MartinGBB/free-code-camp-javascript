function factorialize(num) {
  let factorial = 1;
  for (let i = 1; i <= num; i += 1) {
    factorial *= i
  }
   return factorial;
}

factorialize(5);