function bestSum(target, numbers, memo = {}) {
  if (target === 0) return [];
  if (target < 0) return null;
  if (target in memo) return memo[target];

  let bestSumResult = null;

  for (const number of numbers) {
    const remaining = target - number;
    const remainingResult = bestSum(remaining, numbers, memo);
    if (remainingResult !== null) {
      const currentResult = [...remainingResult, number];
      if (
        bestSumResult === null ||
        bestSumResult.length > currentResult.length
      ) {
        bestSumResult = currentResult;
      }
    }
  }

  memo[target] = bestSumResult;
  return memo[target];
}
