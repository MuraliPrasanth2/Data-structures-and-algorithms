function countNoOfWaysSum(target, numbers, memo = {}) {
  if (target === 0) return 1;
  if (target < 0) return 0;
  if (target in memo) return memo[target];

  let numOfWays = 0;

  for (const number of numbers) {
    const remaining = target - number;
    numOfWays += countNoOfWaysSum(remaining, numbers, memo);
  }

  memo[target] = numOfWays;
  return memo[target];
}
