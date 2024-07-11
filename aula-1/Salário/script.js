let nFun = prompt("Qual seu número de funcionário?")
let salH = Number(prompt("Quanto você ganha por hora?"))
let salT = Number(prompt("Quantas horas você trabalhou esse mês?"))

alert(`Olá, funcionário ${nFun}, seu salário desse mês foi de R$${(salH*salT).toFixed(2)}`)