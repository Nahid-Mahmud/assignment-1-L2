function formatString(input: string, toUpper?: boolean): string {
  if (toUpper === true || toUpper === undefined || toUpper === null) {
    return input.toUpperCase();
  }
  return input.toLowerCase();
}


function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
  const filteredItems = items?.filter((item: { title: string; rating: number }) => item?.rating >= 4);
  return filteredItems;
}
