function formatString(input, toUpper) {
    if (toUpper === false) {
        return input.toLowerCase();
    }
    else {
        return input.toUpperCase();
    }
}
function filterByRating(items) {
    return items.filter(function (item) { return item.rating >= 4; });
}
// Problem 3
function concatenateArrays() {
    var arrays = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arrays[_i] = arguments[_i];
    }
    return arrays.reduce(function (accumulator, currentValue) { return accumulator.concat(currentValue); }, []);
}
// Output: ["a", "b", "c"]
// Output: [1, 2, 3, 4, 5]
var result = concatenateArrays([1, 2], [3, 4], [5]);
console.log(result);
