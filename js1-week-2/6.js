




function printTimesTable(n) {
    let count = 1; 
    while (count <= 12) {
        const product = n * count; 
        console.log(`${count} * ${n} = ${product}`);
        count++;
    }
}
printTimesTable(5);

