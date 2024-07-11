document.querySelector('button').addEventListener("click", () => {
    let nome = document.querySelector('input').value
    const lista = document.createElement("p")
    lista.innerText = nome
    document.body.appendChild(lista)
})