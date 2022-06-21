function maxSubsetSumNoAdjacentRecursive(array, startIndex = 0, memo = {}) {
  let max = 0;
  if (startIndex in memo) return memo[startIndex];

  for (let index = startIndex; index < array.length; index++) {
    const sum =
      array[index] + maxSubsetSumNoAdjacentRecursive(array, index + 2, memo);
    if (max < sum) {
      max = sum;
    }
  }

  memo[startIndex] = max;
  return memo[startIndex];
}
