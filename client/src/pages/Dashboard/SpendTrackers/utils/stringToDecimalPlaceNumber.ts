export function stringToDecimalPlaceNumber(
  value: string | number | null | undefined
): number {
  if (value === null || value === undefined) {
    return 0.0;
  }
  const num = typeof value === "string" ? parseFloat(value) : value;
  return parseFloat(num.toFixed(2));
}
