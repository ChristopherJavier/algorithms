const prompt = require('prompt-sync')()

console.log("Getline Three -Shoes")
console.log("Enter the number of test case")
const testCases = parseInt(prompt())
let shoesPairs

for (i = 1; i <= testCases; i++) {
    caseShoePair = prompt()
    shoesPairs = prompt()

    shoesPairs = shoesPairs.split(" ")
    console.log(`Case ${i}:`)
    console.log("Equal pairs: ", shoesPairs.filter(i => i === caseShoePair).length)
    console.log("F: ", shoesPairs.filter(i => i === "F").length)
    console.log("M: ", shoesPairs.filter(i => i === "M").length)
}