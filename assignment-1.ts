function formatString(input: string, toUpper?: boolean): string {
    if (toUpper === false) {
        return input.toLowerCase();
    } else {
        return input.toUpperCase();
    }
}

type Items = {
    title: string;
    rating: number
}

function filterByRating(items: Items[]): Items[] {
    return items.filter(item => item.rating >= 4)
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.reduce((accumulator, currentValue) => accumulator.concat(currentValue), [])
}

class Vehicle {
    private make: string;
    private year: number;

    constructor(make: string, year: number) {
        this.make = make;
        this.year = year;
    }

    getInfo() {
        return `make ${this.make}, Year: ${this.year}`
    }
}

class Car extends Vehicle {
    private model: string;

    constructor(make: string, year: number, model: string) {
        super(make, year);
        this.model = model;
    }
    getModel() {
        return `Model: ${this.model}`
    }
}

function processValue(value: string | number): number {
    if (typeof value === "string") {
        return value.length;
    } else {
        return value * 2;
    }
}


console.log(processValue("hello"));
console.log(processValue(10));


// const result = concatenateArrays([1, 2], [3, 4], [5]);
// console.log(result);







