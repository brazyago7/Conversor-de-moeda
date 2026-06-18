const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    console.log(currencySelect.value)

    const dolarToday = 5.31
    const euroToday = 6.15


    if (currencySelect.value == "USD") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }
    if (currencySelect.value == "EUR") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }


    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)



}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-image")
    if (currencySelect.value == "USD") {
        currencyName.innerHTML = "Dólar"
        currencyImage.src = "./img/dolar.png"
    }
    if (currencySelect.value == "EUR") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./img/euro.png"
    }
    if (currencySelect.value == "BRL") {
        currencyName.innerHTML = "Real"
        currencyImage.src = "./img/real.png"
    }

    convertValues()
}


currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)


const currencyFrom = document.querySelector(".currency-from")
const rates = {
    BRL: 1,
    USD: 5.31,
    EUR: 6.15,
}
function convertValues() {

    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    const from = currencyFrom.value
    const to = currencySelect.value

    const valueInBRL = inputCurrencyValue * rates[from]
    const convertedValue = valueInBRL / rates[to]

    currencyValueConverted.innerHTML =
        new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: to
        }).format(convertedValue)

    currencyValueToConvert.innerHTML =
        new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: from
        }).format(inputCurrencyValue)
}

function changeCurrencyFrom(){
    const currencyFromText = document.getElementById("currency-from")
    const currencyFromImage = document.querySelector(".image-from")
    
    if (currencyFrom.value == "USD") {
        currencyFromText.innerHTML = "Dólar"
        currencyFromImage.src = "./img/dolar.png"
    }
    if (currencyFrom.value == "EUR") {
        currencyFromText.innerHTML = "Euro"
        currencyFromImage.src = "./img/euro.png"
    }
    if (currencyFrom.value == "BRL") {
        currencyFromText.innerHTML = "Real"
        currencyFromImage.src = "./img/real.png"
    }
    convertValues()
}

currencyFrom.addEventListener("change", changeCurrencyFrom)
convertButton.addEventListener("click", convertValues)