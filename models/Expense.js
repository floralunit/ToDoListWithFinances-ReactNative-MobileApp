export function createExpense(day, month, year) {
  return {
    Day: day,
    Month: month,
    Year: year,
    SpentValue: 0,
    ExtraExpense: '',
  };
}
