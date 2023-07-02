
const tipoDeBaseNumericaInicial = document.getElementById("tipoDeBaseNumericaInicial") as HTMLSelectElement;
const tipoDeBaseNumericaFinal = document.getElementById("tipoDeBaseNumericaFinal") as HTMLSelectElement;
const numberInput = document.getElementById("numberInput") as HTMLSelectElement;
const converterNumberButton = document.getElementById("converterNumberButton") as HTMLSelectElement;


const convertendoValores = () => {
    let valorSelecionadoInicial = tipoDeBaseNumericaInicial.value;
    let valorSelecionadoFinal = tipoDeBaseNumericaFinal.value;
    let valorDigitado = numberInput.value

    console.log(valorSelecionadoFinal);
    console.log(valorSelecionadoInicial);
    console.log(valorDigitado);
}


converterNumberButton.addEventListener('click', (e) => {

    e.preventDefault()
    convertendoValores()

})

