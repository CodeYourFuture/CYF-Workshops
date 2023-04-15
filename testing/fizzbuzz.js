function fizzbuzz(number) {
    let numberArray = [];
    for (let i=1; i<= number; i++){
        if(i%3 === 0 && i%5 === 0){
            numberArray.push("fizzbuzz")
        }else if (i%3 === 0){
            numberArray.push("fizz")    
        }else if(i%5 === 0){
            numberArray.push("buzz")
        }else{
            numberArray.push(i)
        }
    }
    console.log(numberArray.join(", "))
    return numberArray.join(", ")

}

fizzbuzz(35)

export default fizzbuzz;
