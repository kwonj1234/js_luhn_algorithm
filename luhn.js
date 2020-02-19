function luhn() {
    cardNum = document.getElementById('cardNumber')
    
    let arr = []

    for (let i = 0; i < cardNum.value.length; i++) {
        if (i % 2 === 0) {
            number = cardNum.value.charAt(i) * 2
            if (number > 9) {
                console.log(number)
                number = number.toString().split()
                arr.push(1)
                arr.push(number % 10)
            } else {
                arr.push(Number(number))
            }
        } else {
            arr.push(Number(cardNum.value.charAt(i)))
        }
    }
    console.log(arr)
    sum = 0
    
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    console.log(sum)
    if (sum % 10 === 0) {
        if (cardNum.value.length === 16){
            if (cardNum.value.charAt(0) === "4") {
                text = "Valid Visa"
            } else if (cardNum.value.charAt(0) === "5" &&
                        (cardNum.value.charAt(1) === "1" ||
                        cardNum.value.charAt(1) === "2" ||
                        cardNum.value.charAt(1) === "3" ||
                        cardNum.value.charAt(1) === "4" ||
                        cardNum.value.charAt(1) === "5")) {
                text = "Valid Mastercard"
            } else if (cardNum.value.charAt(0) === "6" &&
                        cardNum.value.charAt(1) === "0" &&
                        cardNum.value.charAt(2) === "1" &&
                        cardNum.value.charAt(3) === "1") {
                text = "Valid Discover"
            } else {
                text = "Invalid Credit Card Number"
            }
            
        } else if (cardNum.value.length === 15) {
            console.log(cardNum.value.charAt(1))
            if ((cardNum.value.charAt(1) === "4" ||
                cardNum.value.charAt(1) === "7") &&
                cardNum.value.charAt(0) === "3") {
                text = "Valid AMEX" 
                console.log(text)
            } else {
                text = "Invalid Credit Card Number"
            }
            
        } else {
            text = "Invalid Credit Card Number"
        }

    } else {
        text = "Invalid Credit Card Number"
    }
    document.getElementById("output").innerHTML = "<p>" + text + "</p>"
}

// 347650202246894