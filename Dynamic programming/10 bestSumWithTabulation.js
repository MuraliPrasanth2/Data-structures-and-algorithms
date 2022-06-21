function bestSumWithTabulation(target, numbers) {
  const result = Array(target + 1).fill(null);
  result[0] = [];

  for (let m = 0; m <= target; m++) {
    for (let n = 0; n < numbers.length; n++) {
      if (result[m]) {
        const resultValue = m + numbers[n];
        if (resultValue <= target) {
          const currentCombination = [...result[m], numbers[n]];
          const previousCombination = result[resultValue];
          if (
            !previousCombination ||
            currentCombination.length < previousCombination.length
          ) {
            result[resultValue] = currentCombination;
          }
        }
      }
    }
  }
  return result[target];
}
