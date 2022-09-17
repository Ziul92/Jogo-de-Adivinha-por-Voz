const elementoChute = document.querySelector("[data-chute]")
const botao = document.querySelector("[data-botao]")

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'

//Ativar depois
recognition.start()

recognition.addEventListener('result', onSpeak)


function onSpeak(evento) {
    chute = evento.results[0][0].transcript
    oSeuChute(chute)
    validaNumero(chute)
}

function oSeuChute(chute){
    elementoChute.innerHTML = `
    <div>Você disse:</div>
    <span class="secao__mensagem--box">${chute}</span>
    `
}

document.body.addEventListener("click", (evento) => {
    if (evento.target.dataset.botao === ""){
        window.location.reload()
    }
})

recognition.addEventListener("end", () => recognition.start())


