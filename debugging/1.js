/*
This function should check to see if the given number is equal to
the number 5. This function isn't working correctly can you see why this is the case?
And fix this code!
*/

// function isValueFive(n) {
//     if (n === 5) {
//      return true
//     }

//     return false
// }
// console.log(isValueFive(5))
// isValueFive(5)


// function summation (num) {
// let sum = 0
//   for(i=0; i <= num;){
//   sum = sum + i
//     console.log(sum)
//   i++
// }
//   return sum
// }

// summation (8)

function abbrevName(name){
  let arrayOfNames = []
  arrayOfNames = name.split(" ");
  let arrayOfLetters = []

  for(let item of arrayOfNames){
    console.log(item)
    arrayOfLetters.push(item.charAt(0))
    
  }
  //console.log(arrayOfLetters[0].toUpperCase() . arrayOfLetters[1].toUpperCase())
    return `${arrayOfLetters[0].toUpperCase()}.${arrayOfLetters[1].toUpperCase()}`

}

abbrevName("Olha Danylevska")