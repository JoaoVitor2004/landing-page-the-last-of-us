"use strict";
const botaoAbrir = document.getElementById('abrir');
const botaoFechar = document.getElementById('fechar');
const modal = document.getElementById('modal');
const fade = document.getElementById('fade');
const iframe = document.querySelector('#iframe');
const audio = iframe === null || iframe === void 0 ? void 0 : iframe.src;
const classeHide = 'hide';
function limparClasse() {
    modal === null || modal === void 0 ? void 0 : modal.classList.toggle(classeHide);
    fade === null || fade === void 0 ? void 0 : fade.classList.toggle(classeHide);
}
botaoAbrir === null || botaoAbrir === void 0 ? void 0 : botaoAbrir.addEventListener('click', () => {
    limparClasse();
    iframe === null || iframe === void 0 ? void 0 : iframe.setAttribute('src', audio);
});
botaoFechar === null || botaoFechar === void 0 ? void 0 : botaoFechar.addEventListener('click', () => {
    limparClasse();
    if (iframe)
        iframe.src = '';
});
