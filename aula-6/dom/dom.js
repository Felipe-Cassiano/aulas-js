const quadrado = document.querySelector(".container")

function clique() {
    quadrado.innerHTML = "<h1> fui clicado :O </h1>"
}
function ome() {
    quadrado.style.backgroundColor = "lightblue"
    quadrado.style.border = "1px solid black"
}
function omo() {
    quadrado.style.backgroundColor = "lightcoral"
    quadrado.style.border = "none"
    quadrado.innerHTML = "Clique Aqui"
}
