const prompt = require('prompt-sync')()

console.log("Banknotes and Coins")

const banknotes = [100, 50, 20, 10, 5, 2]
const coins = [1, 0.50, 0.25, 0.10, 0.05, 0.01]

const value = parseFloat(prompt())
let result = value

for (i = 0; i < banknotes.length; i++) {
    console.log(`${Math.trunc(result / banknotes[i])} banknotes of R$ ${banknotes[i]}`)
    result = result % banknotes[i]
}

if (result < 2) {
        for (j = 0; j < coins.length; j++) {
            console.log(`${Math.trunc(result / coins[j])} coins of R$ ${coins[j]}`)
            result = result % coins[j]
            result.toFixed(2)
        }
}
