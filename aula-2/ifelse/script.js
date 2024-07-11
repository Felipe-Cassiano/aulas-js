let anoAtual = Number(prompt("Que ano estamos?"))
let anoNasce = Number(prompt("Que ano você nasceu?"))

if ((anoAtual-anoNasce)>18) {
    alert("Você pode votar: " + String(anoAtual-anoNasce) + " anos")
} else if((anoAtual-anoNasce)==16 | (anoAtual-anoNasce)==17) {
    alert("Você pode votar, se quiser")
}else {
    alert("Você não pode votar: " + String(anoAtual-anoNasce) + " anos")
}