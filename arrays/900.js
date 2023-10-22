// One of these functions has side-effects.
// When you call it, it does something other than just returning a value based only on its parameters.
//
// The other doesn't have side effects.
// When you call it with the same arguments, it always does exactly the same thing,
// and you can see everything it does in its return value.
//
// Which function has side-effects? Which doesn't?
// Try to write tests for both functions.
// Which was easier to test? What issues did you run into writing tests?

const previousWords = [];

function funcOne(word) {
    for (const previousWord of previousWords) {
        if (previousWord.toLowerCase() === word.toLowerCase()) {
            return previousWord;
        }
    }
    previousWords.push(word);
    return word;
}

function funcTwo(word, words) {
    for (const previousWord of words) {
        if (previousWord.toLowerCase() === word.toLowerCase()) {
            return previousWord;
        }
    }
    return word;
}
