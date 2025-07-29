//main.js

import { getLista, limpaLista, adicionaNaLista, removeDaLista } from "./lista.js";

const olItens = document.querySelector("#itens");
const pEntrada = document.querySelector("#entrada");
const btnAdicionar = document.querySelector("#adicionar");
const btnLimpar = document.querySelector("#limpar");

atualizarLista();

function atualizarLista(){
    olItens.innerHTML = "";
    let lista = getLista();
    for(let i = 0; i < lista.length; i++){
        const li = document.createElement('li');
        li.textContent = lista[i];
        olItens.appendChild(li);
    }
}

btnLimpar.addEventListener('click', limparItensDeLista);

function limparItensDeLista(){
    limpaLista();
    atualizarLista();
}

btnAdicionar.addEventListener("click", () => {
    const item = pEntrada.textContent.trim(); // pegar o texto no clique
    if (item !== "") {
        adicionaNaLista(item);
        atualizarLista();
        pEntrada.textContent = ""; // limpar campo
    }
});


