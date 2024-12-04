const formElement = document.querySelector(".js-form");
const amountElement = document.querySelector(".js-amount");
const currencyElement = document.querySelector(".js-currency");
const resultElement = document.querySelector(".js-result");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    const amount = +amountElement.value;
    const currency = currencyElement.value;
    let result;

    switch (currency) {
        case 'USD':
            result = amount / 4.07;
            break;
        case "GBP":
            result = amount / 5.17;
            break;
        case "EUR":
            result = amount / 4.29;
            break;
        case "BTC":
            result = amount / 389299;
            break;
        default:
            alert("Something went wrong. Try Again.");
    }

    if (currency === "BTC") {
        resultElement.innerText = `${result} ${currency}`;
    } else {
        resultElement.innerText = `${result.toFixed(2)} ${currency}`;
    }

});