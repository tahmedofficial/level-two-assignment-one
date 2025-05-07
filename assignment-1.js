function formatString(input, toUpper) {
    if (toUpper === false) {
        return input.toLowerCase();
    }
    else {
        return input.toUpperCase();
    }
}
var carItem = [
    {
        title: "car",
        rating: 4
    },
    {
        title: "bike",
        rating: 3
    },
    {
        title: "ricsha",
        rating: 2
    },
    {
        title: "biman",
        rating: 6
    },
    {
        title: "halicopter",
        rating: 5
    },
];
function filterByRating(items) {
    return items.filter(function (item) { return item.rating >= 4; });
}
var books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
];
// filterByRating(books);
// Output: [ { title: "Book A", rating: 4.5 }, { title: "Book C", rating: 5.0 } ]
var result = filterByRating(carItem);
console.log(result);
