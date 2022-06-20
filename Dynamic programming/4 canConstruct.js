function canConstruct(targetString, wordBank, memo = {}) {
  if (targetString === "") return true;
  if (targetString in memo) return memo[targetString];

  for (const word of wordBank) {
    if (targetString.startsWith(word)) {
      const suffix = targetString.slice(word.length);
      if (canConstruct(suffix, wordBank, memo)) {
        memo[targetString] = true;
        return memo[targetString];
      }
    }
  }
  memo[targetString] = false;
  return memo[targetString];
}
