function validaNumero(chute) {
    const numero = +chute
    if (seNaoForNumero(numero)) {
        elementoChute.innerHTML += `
        <div>Valor invalido, fale um número</div>
        `
    }

    if (numeroEntreOsValores(numero)) {
        elementoChute.innerHTML += `<div>Valor invalido: o número secreto precisar estar entre ${menorValor} e ${maiorValor}</div>`
    }

    if (numero === numeroAleatorio) {
        document.body.innerHTML = `    
        <section class="secao">
            <h1 class="secao__titulo">Você acertou!!!!</h1>
            <p class="secao__texto">O número secreto era ${numeroAleatorio}</p>
            <button class="secao__botao" data-botao>Jogar novamente</button>
        </section>`
    } else if (numero > numeroAleatorio) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>
        `
    }


}

function seNaoForNumero(numero) {
    return Number.isNaN(numero)
}

function numeroEntreOsValores(numero) {
    return numero < menorValor  || numero > maiorValor
}
