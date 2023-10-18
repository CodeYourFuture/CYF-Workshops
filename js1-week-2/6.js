//function printTimesTables(n) {
//   let count = 1;
//   while (count <= 12) {
//     let product = count * n;
//     console.log(`${n} * ${count} = ${product}`);
//     count++;
//   }
// for (let count = 1; count <= 6; count++) {
//   let product = count * n;
//   console.log(`${n} * ${count} = ${product}`);
// count++;
//}
//}
//printTimesTables(4);

// let sideA = 4;
// let sideB = 4;
// let sideC = 4;
// function triangle(a, b, c) {
//   if ((a === b && b === c) || a === c) {
//     return `it is Equilateral Triangle `;
//   } else if ((a === b && b === a) || c != a) {
//     return `this is a Isosceles Triangle`;
//   } else if ((a != b && a != c) || a != b) {
//     return `this is a Scalene Triangle`;
//   }
// }
// console.assert(triangle(2, 2, 2) === "it is Equilateral Triangle ");
// console.assert(triangle(3, 3, 5) === "this is a Isosceles Triangle");

// console.assert(triangle(3, 5, 3) === "this is a Isosceles Triangle");
// console.log(triangle(3, 5, 3));
//console.log(1 === "1");

// function isoscelesTriangle(a, b, c) {
//   if (a == b && a != c) {
//     return `this is a Isosceles Triangle`;
//   } else {
//     return `this is not Isoscelses Triangle`;
//   }
// }
//console.log(equilateralTriangle(sideA, sideB, sideC));

function triangle(a, b, c) {
  if (a === b && b === c) {
    return "Equilateral Triangle";
  } else if (a === b || b === c || c === a) {
    return "Isosceles Triangle";
  } else {
    return "Scalene Triangle";
  }
}

console.assert(triangle(2, 2, 2) === "it is Equilateral Triangle ");
console.assert(triangle(3, 3, 5) === "this is a Isosceles Triangle");

console.assert(triangle(3, 5, 3) === "this is a Isosceles Triangle");
console.log(triangle(3, 5, 3));
