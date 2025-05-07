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

// Problem 3




// const result = filterByRating(carItem)
// console.log(result);







