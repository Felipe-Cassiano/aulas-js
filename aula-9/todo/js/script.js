const newItem = document.querySelector('[data-form-button]') 

const criarTarefa = (i) => {
    i.preventDefault()

    const input = document.querySelector('[data-form-input]')
    const lista = document.querySelector('[data-list]')
    const task = document.createElement('li')
    task.classList.add('task')
    // Conteúdo da <li> que será criada
    const conteudo = `<p class="content">${input.value}</p>`
    task.innerHTML = conteudo
    // Anexando a <li>
    lista.appendChild(task)
    task.appendChild(botao())
    task.appendChild(delBotao())
    input.value = ""
}

newItem.addEventListener('click', criarTarefa)

const botao = () => {
    const check = document.createElement('button')
    check.classList.add('check-button')
    check.innerHTML = "Concluir"

    check.addEventListener('click', concluirTarefa)

    return check
}

const concluirTarefa = (i) =>{
 
    const botaoConclui = i.target
    const tarefaCompleta = botaoConclui.parentElement
    tarefaCompleta.classList.toggle('done')
}

const delBotao = () => {
    const check = document.createElement('button')
    check.classList.add('check-button')
    check.innerHTML = "Deletar"

    check.addEventListener('click', deletarTarefa)

    return check
}

const deletarTarefa = (i) =>{
 
    const deletarBotao = i.target
    const tarefaCompleta = deletarBotao.parentElement
    tarefaCompleta.remove()
    return deletarBotao
}