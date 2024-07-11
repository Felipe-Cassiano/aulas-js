let vel = document.querySelector("#vel")
let navinha = document.querySelector("#nNave")

function up() {

    vel.innerHTML = Number(vel.innerText) +5
}

function down() {
    vel.innerHTML -= 5
}

function reset() {
    vel.innerHTML = "0"
}

function nome() {
    document.querySelector("#nave").innerHTML="O nome da sua nave é: "+navinha.value
}
function apagar() {
    document.querySelector("#nave").innerHTML=""
}


document.querySelector("#up").addEventListener("click", up)
document.querySelector("#down").addEventListener("click", down)
document.querySelector("#sair").addEventListener("click", reset)
document.querySelector("#sNave").addEventListener("click", nome)
document.querySelector("#limpar").addEventListener("click", apagar)

