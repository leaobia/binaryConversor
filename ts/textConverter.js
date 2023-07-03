"use strict";
// declaração de váriaveis
const selecaoCaractere = document.getElementById("selecaoCaractere");
const textareaConverter = document.getElementById("textareaConverter");
const converterTextButton = document.getElementById("converterTextButton");
const inputValorTextoEmBinario = document.getElementById("valorTextoEmBinario");
const textoParaBinario = (texto) => {
    let binario = '';
    for (let i = 0; i < texto.length; i++) {
        const binarioChar = texto[i].charCodeAt(0).toString(2);
        binario += binarioChar.padStart(8, '0');
    }
    return binario;
};
const binarioParaTexto = (binario) => {
    let texto = '';
    for (let i = 0; i < binario.length; i += 8) {
        const binarioChar = binario.substr(i, 8);
        const decimal = parseInt(binarioChar, 2);
        const caractere = String.fromCharCode(decimal);
        texto += caractere;
    }
    return texto;
};
// função principal
const convertendoTexto = () => {
    let tipoCaractere = selecaoCaractere.value;
    let valorDigitado = textareaConverter.value;
    const isBinary = /^[01]+$/;
    if (tipoCaractere === "decimal") {
        const binarioConvertido = textoParaBinario(valorDigitado);
        inputValorTextoEmBinario.value = binarioConvertido;
    }
    else if (isBinary.test(valorDigitado) && tipoCaractere === "binario") {
        const textoConvertido = binarioParaTexto(valorDigitado);
        inputValorTextoEmBinario.value = textoConvertido;
    }
    else {
        alert("O valor digitado não é um número binário válido. Por favor, insira um número binário (0 e 1) válido.");
    }
};
converterTextButton.addEventListener('click', (e) => {
    e.preventDefault();
    convertendoTexto();
});
