function howSumWithTabulation(target, numbers) {
  const result = Array(target + 1).fill(null);
  result[0] = [];

  for (let m = 0; m <= target; m++) {
    for (let n = 0; n < numbers.length; n++) {
      if (result[m]) {
        if (m + numbers[n] <= target) {
          result[m + numbers[n]] = [...result[m], numbers[n]];
        }
      }
    }
  }
  return result[target];
}
