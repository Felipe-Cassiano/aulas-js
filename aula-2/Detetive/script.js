let nome = prompt("Qual o seu nome?")
alert ("Responda as seguintes perguntas com 1 (Sim) ou 0(Não)")
let p1 = Number(prompt("Telefonou para a vítima?"))
let p2 = Number(prompt("Esteve no local do crime?"))
let p3 = Number(prompt("Mora perto da vítima?"))
let p4 = Number(prompt("Devia para a vítima?"))
let p5 = Number(prompt("Já trabalhou com a vítima?"))


if ((p1+p2+p3+p4+p5) == 2) {
    alert(`${nome}, você é Suspeito`)
} else if ((p1+p2+p3+p4+p5) == 3 | (p1+p2+p3+p4+p5) == 4) {
    alert(`${nome}, você é Cúmplice`)
} else if ((p1+p2+p3+p4+p5)>=5) {
    alert(`${nome}, você é o Assassino!`)
} else {
    alert(`${nome}, você é inocente`)
}

