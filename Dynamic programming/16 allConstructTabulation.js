function allConstructTabulation(targetString, wordBank) {
  const result = Array(targetString.length + 1).fill([]);
  result[0] = [[]];
  for (let index = 0; index < targetString.length; index++) {
    for (const word of wordBank) {
      if (result[index].length > 0) {
        if (index + word.length <= targetString.length) {
          if (word === targetString.slice(index, index + word.length)) {
            result[index + word.length] = [
              ...result[index + word.length],
              ...result[index].map((res) => [...res, word]),
            ];
          }
        }
      }
    }
  }

  return result[targetString.length];
}
