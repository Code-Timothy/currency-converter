const formElement = document.querySelector(".js-form");
const amountElement = document.querySelector(".js-amount");
const currencyElement = document.querySelector(".js-currency");
const resultElement = document.querySelector(".js-result");

const calculateResult = (currency, amount) => {

    const rateEUR = 4.29;
    const rateUSD = 4.07;
    const rateGBP = 5.17;
    const rateBTC = 389299;

    switch (currency) {
        case 'USD':
            return amount / rateUSD;

        case "GBP":
            return amount / rateGBP;

        case "EUR":
            return amount / rateEUR;

        case "BTC":
            return amount / rateBTC;

        default:
            alert("Something went wrong. Try Again.");
    }
};

const showResultText = (currency, result) => {
    if (currency === "BTC") {
        resultElement.innerText = `${result} ${currency}`;
    } else {
        resultElement.innerText = `${result.toFixed(2)} ${currency}`;
    }
};

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    const amount = +amountElement.value;
    const currency = currencyElement.value;

    const result = calculateResult(currency, amount);
    showResultText(currency, result);
});