

printTimesTables(3);

/*function printTimesTables(n) {
    const count = 1;
    while(count <= 12) {
        const product = n * i;
        console.log(`${n} * ${i} = ${product}`);
        count++;
    }
}
*/
function printTimesTables(n) {
    let count = 1;
    while(count <= 12) {
        const product = n * count;
        console.log(`${n} * ${count} = ${product}`);
        count++;
    }
}

