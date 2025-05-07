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

// Problem 3




// const result = concatenateArrays([1, 2], [3, 4], [5]);
// console.log(result);







