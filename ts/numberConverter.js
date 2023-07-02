"use strict";
const tipoDeBaseNumericaInicial = document.getElementById("tipoDeBaseNumericaInicial");
const tipoDeBaseNumericaFinal = document.getElementById("tipoDeBaseNumericaFinal");
const numberInput = document.getElementById("numberInput");
const converterNumberButton = document.getElementById("converterNumberButton");
const convertendoValores = () => {
    let valorSelecionadoInicial = tipoDeBaseNumericaInicial.value;
    let valorSelecionadoFinal = tipoDeBaseNumericaFinal.value;
    let valorDigitado = numberInput.value;
    console.log(valorSelecionadoFinal);
    console.log(valorSelecionadoInicial);
    console.log(valorDigitado);
};
converterNumberButton.addEventListener('click', (e) => {
    e.preventDefault();
    convertendoValores();
});
