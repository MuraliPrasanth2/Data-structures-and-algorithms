function howConstructTabulation(targetString, wordBank) {
  const result = Array(targetString.length + 1).fill(null);
  result[0] = [];
  for (let index = 0; index <= targetString.length; index++) {
    for (const word of wordBank) {
      if (result[index]) {
        if (index + word.length <= targetString.length) {
          if (word === targetString.slice(index, index + word.length)) {
            result[index + word.length] = [...result[index], word];
          }
        }
      }
    }
  }
  return result[targetString.length];
}
