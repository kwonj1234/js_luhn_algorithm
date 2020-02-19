function luhn() {
    let cardNum = document.getElementById('cardNumber')
    
    cardNum.toString()
    let arr = []
    for (let i = 0; i < cardNum.length; i++) {
        if (i % 2 === 0) {
            number = cardNum[i].toNumber() * 2
            if (number > 9) {
                number = number.toString().split()
            }
            console.log(number)
            arr.push(number)
        }
    }

    sum = 0
    
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i].toNumber()
    }
    if (sum % 10) {
        text = "Valid"
    } else {
        text = "Invalid"
    }

    document.getElementById("output").innerHTML = "<p>" + text + "</p>"
}