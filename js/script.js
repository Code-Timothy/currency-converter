let currencyElement = document.querySelector(".js-currency");
let amountElement = document.querySelector(".js-amount");
let resultElement = document.querySelector(".js-result");
let formElement = document.querySelector(".js-form");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = +amountElement.value;
    let currency = currencyElement.value;
    let rateUSD = 4.07;
    let rateEUR = 4.45;
    let rateCHF = 4.56;

    switch (currency) {
        case "USD":
            result = amount / rateUSD;
            break;
        case "EUR":
            result = amount / rateEUR;
            break;
        case "CHF":
            result = amount / rateCHF;
            break;
    };

    resultElement.textContent = `Za ${amount} PLN dostaniesz ${result.toFixed(2)} ${currency} `;
});
