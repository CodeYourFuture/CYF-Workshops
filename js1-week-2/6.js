



function printTimesTables(n) {
    let count = 1;
    while(count <= 12) {
        let product = n * count;
        console.log(`${n} * ${count} = ${product}`);
        count++;
    }
}

printTimesTables(5);

