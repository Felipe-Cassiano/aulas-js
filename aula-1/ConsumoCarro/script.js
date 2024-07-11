let model = prompt("Qual o modelo do seu carro?")
let km = Number(prompt("Quantos km ele percorreu?"))
let litro = Number(prompt("Quantos litros ele consumiu?"))

alert(`Seu ${model} consome ${(km/litro).toFixed(2)}km/l`)