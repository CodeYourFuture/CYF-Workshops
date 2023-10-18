

// list is an array that holds a mix of data types
// we need to collect just the numbers and not the strings

function collectNumbers(list) {

    for (const item of list) {
        if (item === 'string') {
            numbersOnly.push(item);
        }
    }
}


test('should collect numbers only',() => {

});