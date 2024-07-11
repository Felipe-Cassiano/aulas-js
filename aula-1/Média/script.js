let num1 = Number(prompt("Digite a primeira nota"))
let num2 = Number(prompt("Digite a segunda nota"))
let num3 = Number(prompt("Digite a última nota"))

if ((num1+num2+num3)/3<7) {
    alert(`O aluno ficou abaixo da média (${((num1+num2+num3)/3).toFixed(2)})`)
} else {
    alert(`O aluno ficou acima da média (${((num1+num2+num3)/3).toFixed(2)})`)
}