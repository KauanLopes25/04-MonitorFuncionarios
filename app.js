'use strict'

import funcionarios from "./funcionarios.json" with { type: 'json' };


function criarMonitor(srcFuncionario){
    const monitor = document.getElementById('monitor')
    const container = document.createElement('div')
    const imagem = document.createElement('img')
    const nome = document.createElement('h2')
    const cargo = document.createElement('p')

    imagem.src = `./img/${srcFuncionario.imagem}`
    nome.textContent = srcFuncionario.nome
    cargo.textContent = srcFuncionario.cargo
    
    monitor.appendChild(container)
    container.appendChild(imagem)
    container.appendChild(nome)
    container.appendChild(cargo)
}

function buscarJson(){
    funcionarios.forEach(criarMonitor)
}

buscarJson()

