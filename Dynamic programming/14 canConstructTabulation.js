function canConstructTabulation(targetString, wordBank) {
  const result = Array(targetString.length + 1).fill(false);
  result[0] = true;
  for (let index = 0; index <= targetString.length; index++) {
    if (result[index]) {
      for (word of wordBank) {
        if (index + word.length <= targetString.length) {
          if (word === targetString.slice(index, index + word.length)) {
            result[index + word.length] = true;
          }
        }
      }
    }
  }
  return result[targetString.length];
}
