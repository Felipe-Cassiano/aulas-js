let nome = prompt("Digite seu nome:")
let sal =Number(prompt("Qual seu salário fixo?"))
let ven =Number(prompt("Qual o valor das suas vendas esse mês?"))

alert(`Olá, ${nome}! Seu salário desse mês será de ${(sal+(ven*0.15)).toFixed(2)}, visto que seu salário fixo é de ${sal} e você vendeu um total de ${ven}, parabéns!`)