document.querySelector('button').addEventListener('click', () => {
    const area = document.querySelector('#inp1').value
    const numero = document.querySelector('#inp2').value
    const bairro = document.querySelector('#inp3').value
    const cidade = document.querySelector('#inp4').value

    const save = document.createElement('li')
    save.innerHTML = `${area}m², número ${numero} (${bairro} - ${cidade})`

    const delButton = document.createElement('button')
    delButton.innerHTML = 'Deletar'
    delButton.addEventListener('click', delSave)


    if (area == "" || numero == "" || bairro == "" || cidade == "") {
        save.innerHTML = "ERRO: Informações Insuficientes"
        save.style.color = 'red'
        save.style.fontWeight = '700'   
    }

    document.querySelector('ul').appendChild(save)
    save.appendChild(delButton)
})

const delSave = (i) => {
    const targetSave = i.target
    const removeSave = targetSave.parentElement
    removeSave.remove()
}
