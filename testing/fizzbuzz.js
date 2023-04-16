function fizzbuzz(number) {
    
    if(number % 3 === 0){
        return 'Fizz'
    }else if(number % 5 === 0){
        return 'Buzz'
    }else if(number === 1) {
        return "1"
    }
}

export default fizzbuzz;
