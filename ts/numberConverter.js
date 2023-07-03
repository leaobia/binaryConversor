"use strict";
// declaração de váriaveis
const tipoDeBaseNumericaInicial = document.getElementById("tipoDeBaseNumericaInicial");
const numberInput = document.getElementById("numberInput");
const converterNumberButton = document.getElementById("converterNumberButton");
const inputShowConverter = document.getElementById("inputShowConverter");
// funções que realizam as operações de conversão
const decimalToBinary = (decimalNumber) => {
    return decimalNumber.toString(2);
};
const binaryToDecimal = (binaryNumber) => {
    return parseInt(binaryNumber, 2);
};
const convertendoValores = () => {
    let valorSelecionadoInicial = tipoDeBaseNumericaInicial.value;
    let valorDigitado = numberInput.value;
    const isBinary = /^[01]+$/;
    if (valorSelecionadoInicial === "decimal") {
        const decimalNumber = Number(valorDigitado);
        const binaryNumber = decimalToBinary(decimalNumber);
        inputShowConverter.value = binaryNumber.toString();
    }
    else if (isBinary.test(valorDigitado) && valorSelecionadoInicial === "binario") {
        const decimalNumber = binaryToDecimal(valorDigitado);
        inputShowConverter.value = decimalNumber.toString();
    }
    else {
        alert("O valor digitado não é um número binário válido. Por favor, insira um número binário (0 e 1) válido.");
    }
};
// chamando a função principal ao clicar no botão
converterNumberButton.addEventListener('click', (e) => {
    e.preventDefault();
    convertendoValores();
});
