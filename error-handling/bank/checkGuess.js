// Tell the user if they have guessed a mystery number correctly

const checkGuess = (guess) => {
    const mysteryNumber = 5;

    if (guess === mysteryNumber){
        console.log("Congratulations, you guessed correctly!");
    } else if (guess > 0 && guess < mysteryNumber) {
        console.log("Sorry, that guess was too low.");
    } else if (guess > mysteryNumber && guess <= 10) {
        console.log("Sorry, that guess was too high.");
    }
}

// Correct guess
checkGuess(5)

// Too high
checkGuess(8)

// Doesn't print anything...
checkGuess(11)