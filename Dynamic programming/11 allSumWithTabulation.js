function allSumWithTabulation(target, numbers) {
  let result = Array(target + 1).fill([]);
  result[0] = [[]];
  for (let m = 0; m <= target; m++) {
    for (let n = 0; n < numbers.length; n++) {
      if (result[m].length > 0) {
        const resultValue = m + numbers[n];
        if (resultValue <= target) {
          result[resultValue] = [
            ...result[resultValue],
            ...result[m].map((res) => [...res, numbers[n]]),
          ];
        }
      }
    }
  }
  return result[target];
}
