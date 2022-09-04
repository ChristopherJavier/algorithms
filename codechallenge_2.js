const promptSync = require("prompt-sync")()

console.log("Optical Reader")
const testCases = promptSync("Insert the number of test cases \n")
let answerInput
let answersSheet = []
let answersIndexes = []
let processedAnswers = []

if (testCases >= 1 && testCases <= 255) {
    for (i = 0; i < testCases; i++) {
        answerInput = promptSync()
        answersSheet.push(answerInput.split(" ").map(x => Number(x)))
    }

} else {
    console.log("It is not in range")
}

if (answersSheet.length >= 1) {
    for (i = 0; i < answersSheet.length; i++) {
        let answerIndex

        answerIndex = answersSheet[i].findIndex(i => i >= 0 && i <= 127)
        switch (answerIndex) {
            case 0:
                answerIndex = "A"
                break
            case 1:
                answerIndex = "B"
                break
            case 2:
                answerIndex = "C"
                break
            case 3:
                answerIndex = "D"
                break
            case 4:
                answerIndex = "E"
                break
            default:
                answerIndex = ""
        }

        if (answersSheet[i].filter(i => i >= 0 && i <= 127).length > 1) {
            answerIndex = "*"
        }

        processedAnswers.push(answerIndex)
    }
}

processedAnswers.forEach(i => console.log(i))