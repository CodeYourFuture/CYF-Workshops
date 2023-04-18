function fizzbuzz(number) {
    const numbersArray = [];
    for (let i=1; i <= number; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            numbersArray.push("fizzbuzz")
        } else if (i % 3 === 0) {
            numbersArray.push("fizz");
        } else if (i % 5 === 0) {
            numbersArray.push("buzz");
        } else { 
            numbersArray.push(i);
        }
    }
    return numbersArray.join();
}

export default fizzbuzz;

console.log(fizzbuzz(4))