function canSum(target, numbers, memo = {}) {
  if (target in memo) return memo[target];
  if (target === 0) return true;
  if (target < 0) return false;

  for (let number of numbers) {
    remaining = target - number;
    if (canSum(remaining, numbers, memo)) {
      memo[target] = true;
      return memo[target];
    }
  }

  memo[target] = false;
  return memo[target];
}
