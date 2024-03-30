const botaoAbrir = document.getElementById('abrir')
const botaoFechar = document.getElementById('fechar')
const modal = document.getElementById('modal')
const fade = document.getElementById('fade')
const iframe = document.querySelector('#iframe')
const audio = iframe.src

function limparClasse(){
    modal.classList.toggle('hide')
    fade.classList.toggle('hide')
}

botaoAbrir.addEventListener('click', () => {
    limparClasse()
    iframe.setAttribute('src', audio)
})

botaoFechar.addEventListener('click', () => {
    limparClasse()
    iframe.src = ''
})