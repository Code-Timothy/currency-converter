const formElement = document.querySelector(".js-form");
const amountElement = document.querySelector(".js-amount");
const currencyElement = document.querySelector(".js-currency");
const resultElement = document.querySelector(".js-result");

const calculateResult = (currency, amount) => {
    switch (currency) {
        case 'USD':
            return amount / 4.07;

        case "GBP":
            return amount / 5.17;

        case "EUR":
            return amount / 4.29;

        case "BTC":
            return amount / 389299;

        default:
            alert("Something went wrong. Try Again.");
    }
};

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    const amount = +amountElement.value;
    const currency = currencyElement.value;

    const result = calculateResult(currency, amount);



    if (currency === "BTC") {
        resultElement.innerText = `${result} ${currency}`;
    } else {
        resultElement.innerText = `${result.toFixed(2)} ${currency}`;
    }

});