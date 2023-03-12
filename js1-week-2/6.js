function printTimesTables(n) {
  let count = 1;
  while (count <= 12) {
    let product = count * n;
    console.log(`${count} * ${n} = ${product}`);
    count++;
  }
}
console.log(printTimesTables(5));
