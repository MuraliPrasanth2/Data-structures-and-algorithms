function countConstruct(targetString, wordBank, memo = {}) {
  if (targetString === "") return 1;
  if (targetString in memo) return memo[targetString];

  let countWays = 0;

  for (const word of wordBank) {
    if (targetString.startsWith(word)) {
      const suffix = targetString.slice(word.length);
      countWays += countConstruct(suffix, wordBank, memo);
    }
  }
  memo[targetString] = countWays;
  return memo[targetString];
}
