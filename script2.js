let euroElement = document.querySelector(".js-euro");
let exchangeRate = document.querySelector(".js-exchangeRate");
let exchangeResult = document.querySelector(".js-result");
let formElement = document.querySelector(".js-form");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let euro = euroElement.value;
    let exchange = exchangeRate.value;
    let result = euro * exchange;


    exchangeResult.innerText = result.toFixed(2);



});

