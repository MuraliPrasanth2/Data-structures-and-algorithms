function countWaysTabulative(rows, columns) {
  const result = Array(rows + 1)
    .fill()
    .map(() => Array(columns + 1).fill(0));
  result[1][1] = 1;

  for (let row = 0; row <= rows; row++) {
    for (let column = 0; column <= columns; column++) {
      const currentCellValue = result[row][column];
      if (row + 1 <= rows)
        result[row + 1][column] = result[row + 1][column] + currentCellValue;
      if (column + 1 <= columns)
        result[row][column + 1] = result[row][column + 1] + currentCellValue;
    }
  }
  return result[rows][columns];
}
