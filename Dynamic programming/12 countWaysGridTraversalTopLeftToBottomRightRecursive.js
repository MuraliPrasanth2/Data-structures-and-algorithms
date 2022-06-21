function countWaysRecursive(rows, columns, memo = {}) {
  if (rows === 1 && columns === 1) return 1n;
  if (rows === 0 || columns === 0) return 0n;

  const key1 = `${rows},${columns}`;
  if (key1 in memo) return memo[key1];
  memo[key1] =
    countWaysRecursive(rows - 1, columns, memo) +
    countWaysRecursive(rows, columns - 1, memo);

  const key2 = `${columns},${rows}`;
  memo[key2] = memo[key1];

  return memo[key1];
}
