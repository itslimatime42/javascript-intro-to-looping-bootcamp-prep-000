function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    var stringToAdd;
    if (i === 1) {
      stringToAdd = "I am 1 strange loop.";
      array.push(stringToAdd);
    } else {
      stringToAdd = `I am ${i} strange loops.`;
      array.push(stringToAdd);
    }
  }
  return array
}

function whileLoop(n) {
  console.log(n);
  while (n > 0) {
    console.log(--n);
  }
}