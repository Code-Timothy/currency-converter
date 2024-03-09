{
    const formElement = document.querySelector(".js-form");
    const amountElement = document.querySelector(".js-amount");
    const resultElement = document.querySelector(".js-result");
    const selectElement = document.querySelector(".js-select");

    const calculateResult = () => {
        const eurRate = 4.35;
        const usdRate = 3.95;
        const gbpRate = 5.01;
        const chfRate = 4.48;
        const amount = amountElement.value;
        const currency = selectElement.value;

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
}