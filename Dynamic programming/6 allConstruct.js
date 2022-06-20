function allConstruct(targetString, wordBank, memo = {}) {
  if (targetString === "") return [[]];
  if (targetString in memo) return memo[targetString];

  let allWays = [];

  for (const word of wordBank) {
    if (targetString.startsWith(word)) {
      const suffix = targetString.slice(word.length);
      const suffixWays = allConstruct(suffix, wordBank, memo);
      if (suffixWays.length > 0) {
        allWays = [...allWays, ...suffixWays.map((way) => [word, ...way])];
      }
    }
  }

  memo[targetString] = allWays;
  return memo[targetString];
}
