function canSum(
  target,
  numbers,
  memo = {}
) {
  if (target in memo)
    return memo[target];
  if (target === 0) return true;
  if (target < 0) return false;

  for (let number of numbers) {
    remaining = target - number;
    if (
      canSum(remaining, numbers, memo)
    ) {
      memo[target] = true;
      return memo[target];
    }
  }

  memo[target] = false;
  return memo[target];
}

const memo = {};

console.log(canSum(7, [1, 2, 3, 4]));
console.log(canSum(5, [3, 4, 5]));
console.log(canSum(8, [4, 3, 5]));
console.log(canSum(0, [1, 2, 3]));
console.log(canSum(2, [3, 4, 5]));
console.log(
  canSum(10000, [5, 4, 5], memo)
);
