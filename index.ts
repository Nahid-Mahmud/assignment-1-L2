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

function concatenateArrays<T>(...arrays: T[][]): T[] {
  const arrayLength = arrays.length;

  let convertedArray = [];

  for (let i = 0; i < arrayLength; i++) {
    const firstLevelArrayLength: number = arrays[i].length;
    const firstLevelArray = arrays[i];

    for (let j = 0; j < firstLevelArrayLength; j++) {
      convertedArray.push(firstLevelArray[j]);
    }
  }

  return convertedArray;
}

class Vehicle {
  private make: string;
  year: number;
  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }

  getInfo(): string {
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}

class Car extends Vehicle {
  private model: string;
  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }

  getModel(): string {
    return `Model: ${this.model}`;
  }
}

function processValue(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  }
  return value * 2;
}

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length === 0) return null;
  const productsLength = products.length;
  let pricesArray = [];

  for (let i = 0; i < productsLength; i++) {
    pricesArray.push(products[i].price);
  }

  const maxPrice = Math.max(...pricesArray);

  const maxPriceProduct = products.find((product) => product.price === maxPrice);

  return maxPriceProduct || null;
}

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  if (day === Day.Saturday || day === Day.Sunday) {
    return "Weekend";
  }
  return "Weekday";
}

async function squareAsync(n: number): Promise<number> {
  const promise = new Promise<number>((resolve, reject) => {
    if (n >= 0) {
      setTimeout(() => {
        resolve(n * n);
      }, 1000);
    } else {
      reject(new Error("Negative number not allowed"));
    }
  });

  return promise;
}
