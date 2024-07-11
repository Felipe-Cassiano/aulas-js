let salario = Number(prompt("Quanto você ganha?"))

if (salario <=400) {
    alert("Novo salário: " + salario+(salario*0.15) + "; Reajuste ganho: " + salario*0.15 + "; Em percentual = 15%")
} else if(salario <= 800){
    alert("Novo salário: " + salario+salario*0.12 + "; Reajuste ganho: " + salario*0.12 + "; Em percentual = 12%")
} else if(salario<=1200){
    alert("Novo salário: " + salario+salario*0.10 + "; Reajuste ganho: " + salario*0.10 + "; Em percentual = 10%")
} else if(salario<=2000){
    alert("Novo salário: " + salario+salario*0.07 + "; Reajuste ganho: " + salario*0.07 + "; Em percentual = 7%")
} else {
    alert("Novo salário: " + salario+salario*0.04 + "; Reajuste ganho: " + salario*0.04 + "; Em percentual = 4%")
}