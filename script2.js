{
const euroElement = document.querySelector(".js-euro");
const exchangeRate = document.querySelector(".js-exchangeRate");
const exchangeResult = document.querySelector(".js-result");
const formElement = document.querySelector(".js-form");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    const euro = euroElement.value;
    const exchange = exchangeRate.value;
    let result = euro * exchange;
    exchangeResult.innerText = result.toFixed(2);
})};

