const numero = document.querySelectorAll("[data-valor]")

const menorValor = 1
const maiorValor = 10000
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
