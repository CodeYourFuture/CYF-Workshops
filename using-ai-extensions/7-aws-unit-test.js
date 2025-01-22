function mood(isHappy) {
    if (isHappy) {
      return "I am happy";
    } else {
      return "I am not happy";
    }
  }

  function greaterThan10(num) {
    let isBigEnough = num > 10;

    if (isBigEnough) {
      return "num is greater than 10";
    } else {
      return "num is not big enough";
    }
  }

// Write unit tests in jest for the following functions:
// mood function works for true
