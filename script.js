{
    const calculateResult = (currency, amount) => {
        const eurRate = 4.35;
        const usdRate = 3.95;
        const gbpRate = 5.01;
        const chfRate = 4.48;

        switch (currency) {
            case "EUR":
                return amount / eurRate;
            case "USD":
                return amount / usdRate;
            case "GBP":
                return amount / gbpRate;
            case "CHF":
                return amount / chfRate;
        }
    };

    const formElement = document.querySelector(".js-form");

    formElement.addEventListener("submit", (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");
        const selectElement = document.querySelector(".js-select");
        const resultElement = document.querySelector(".js-result");

        const amount = amountElement.value;
        const currency = selectElement.value;

        const result = calculateResult(currency, amount);

        resultElement.innerText = `${amount} PLN = ${result.toFixed(2)} ${currency}`;
    });
}