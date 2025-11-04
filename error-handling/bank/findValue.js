const city = {
    name: "London",
    country: "United Kingdom",
    population: 9100000,
    tallestBuilding: "The Shard",
    mayor: "Sadiq Khan",
    annualTourists: 30000000
}

const findValue = (key) => {
    const value = city[key]

    console.log(`The value associated with ${key} is ${value}`);   
}

// This will work
findValue("name")

// This gives a value of "undefined"
findValue("biggestMuseum")