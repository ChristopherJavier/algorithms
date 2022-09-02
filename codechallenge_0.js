const snackTotal = (x, y) => {
    let price, total

    switch (x) {
        case 1:
            price = 4.00;
            break
        case 2:
            price = 4.50;
            break
        case 3:
            price = 5.00;
            break
        case 4:
            price = 2.00;
            break
        case 5:
            price = 1.50;
            break
        default:
            console.log("No valid code")
    }

    total = price * y
    return console.log(`Total: R$${total.toFixed(2)}`)
}

snackTotal(2, 3)
