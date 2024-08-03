const botaoAbrir: HTMLElement | null = document.getElementById('abrir')
const botaoFechar: HTMLElement | null = document.getElementById('fechar')
const modal: HTMLElement | null = document.getElementById('modal')
const fade: HTMLElement | null = document.getElementById('fade')
const iframe: HTMLElement | null = document.querySelector('#iframe')
const audio = iframe?.src
const classeHide: string = 'hide'

function limparClasse(){
    modal?.classList.toggle(classeHide)
    fade?.classList.toggle(classeHide)
}

botaoAbrir?.addEventListener('click', () => {
    limparClasse()
    iframe?.setAttribute('src', audio)
})

botaoFechar?.addEventListener('click', () => {
    limparClasse()
    if (iframe) iframe.src = ''
})