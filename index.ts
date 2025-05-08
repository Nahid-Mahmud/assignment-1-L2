function formatString(input: string, toUpper?: boolean): string {
  if (toUpper === true || toUpper === undefined || toUpper === null) {
    return input.toUpperCase();
  }
  return input.toLowerCase();
}
