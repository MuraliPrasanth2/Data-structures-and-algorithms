function canSum(target, numbers) {
  const result = Array(target + 1).fill(false);
  result[0] = true;
  for (let m = 0; m <= target; m++) {
    for (let n = 0; n < numbers.length; n++) {
      if (result[m]) {
        if (m + numbers[n] <= target) {
          result[m + numbers[n]] = true;
        }
      }
    }
  }
  console.log(result);
  return result[target];
}
