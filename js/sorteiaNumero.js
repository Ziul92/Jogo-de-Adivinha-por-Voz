const numero = document.querySelectorAll("[data-valor]")

const menorValor = 90
const maiorValor = 100
const numeroAleatorio = gerarNumeroAleatorio()

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * (menorValor - maiorValor) + maiorValor + 1)
}

numero.forEach((elemento) => {
    if(elemento.dataset.valor === "maior") {
        elemento.innerHTML = maiorValor
    } else if(elemento.dataset.valor === "menor") {
        elemento.innerHTML = menorValor
    }
})

console.log(numeroAleatorio)
