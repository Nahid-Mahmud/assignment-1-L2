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

const myCar = new Car("Toyota", 2020, "Corolla");
