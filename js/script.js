{
    let currencyElement = document.querySelector(".js-currency");
    let amountElement = document.querySelector(".js-amount");
    let resultElement = document.querySelector(".js-result");
    let formElement = document.querySelector(".js-form");

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

    formElement.addEventListener("submit", (event) => {
        event.preventDefault();

        let amount = +amountElement.value;
        let currency = currencyElement.value;

        calculateResult(currency, amount);

        resultElement.textContent = `Za ${amount} PLN dostaniesz ${result.toFixed(2)} ${currency} `;
    });
}