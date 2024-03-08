let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let resultElement = document.querySelector(".js-result");
let selectElement = document.querySelector(".js-select");

let calculateResult = () => {
    let eurRate = 4.35;
    let usdRate = 3.95;
    let gbpRate = 5.01;
    let chfRate = 4.48;
    let amount = amountElement.value;
    let currency = selectElement.value;

    switch (currency) {
        case "EUR":
            result = amount / eurRate;
            break;
        case "USD":
            result = amount / usdRate;
            break;
        case "GBP":
            result = amount / gbpRate;
            break;
        case "CHF":
            result = amount / chfRate;
            break;
    }

    resultElement.innerText = `${amount} PLN = ${result.toFixed(2)} ${currency}`;
};

formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    calculateResult();
});