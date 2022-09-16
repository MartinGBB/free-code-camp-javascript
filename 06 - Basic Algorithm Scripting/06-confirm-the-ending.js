function confirmEnding(str, target) {
  const separateString = str.slice(`-${target.length}`);
  return separateString === target;
}

confirmEnding("Bastian", "n");
confirmEnding("Congratulation", "on");
confirmEnding("He has to give me a new name", "name")