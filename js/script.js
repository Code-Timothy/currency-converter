{
    const calculateResult = (currency, amount) => {
        const rateUSD = 4.07;
        const rateEUR = 4.45;
        const rateCHF = 4.56;

        switch (currency) {
            case "USD":
                return amount / rateUSD;

            case "EUR":
                return amount / rateEUR;

            case "CHF":
                return amount / rateCHF;
        };
    }

    const updateResultText = (amount, result, currency) => {
        let resultElement = document.querySelector(".js-result");

        resultElement.textContent = `Za ${amount} PLN dostaniesz ${result.toFixed(2)} ${currency} `;
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");

        const amount = +amountElement.value;
        const currency = currencyElement.value;

        const result = calculateResult(currency, amount);
        updateResultText(amount, result, currency);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();
}