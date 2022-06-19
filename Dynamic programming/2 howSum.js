function howSum(target, numbers, memo = {}) {
  if (target in memo) return memo[target];
  if (target === 0) return [];
  if (target < 0) return null;

  for (let number of numbers) {
    const remaining = target - number;
    const remainingResult = howSum(remaining, numbers, memo);
    if (remainingResult !== null) {
      memo[target] = [...remainingResult, number];
      return memo[target];
    }
  }

  memo[target] = null;
  return memo[target];
}
