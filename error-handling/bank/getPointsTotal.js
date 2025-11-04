const arsenalResults = {
    wins: 5,
    draws: 3,
    losses: 2
}

const chelseaResults = {
    wins: 4,
    draws: 4
}

const fulhamResults = {
    wins: 1,
    draws: 2,
    losses: 5
}

const tottenhamResults = {
    wins: 3,
    losses: 5
}

const getPointsTotal = (teamResults) => {
    let total = 0;

    // 3 points for each win
    total += teamResults.wins * 3;

    // 1 point for a draw
    total += teamResults.draws

    // 0 points for a loss, so no need to add them

    return total
}

// 18 points for Arsenal
console.log("Arsenal total:", getPointsTotal(arsenalResults))

// 16 points for Chelsea
console.log("Chelsea total:", getPointsTotal(chelseaResults))

// 5 points for Fulham
console.log("Fulham total:", getPointsTotal(fulhamResults))

// NaN points for Tottenham - should be 14!
console.log("Tottenham total:", getPointsTotal(tottenhamResults))