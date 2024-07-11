function sum() {
    
    let n1 = Number(document.querySelector('#n1').value)
    let n2 = Number(document.querySelector('#n2').value)
    let resul = n1+n2

    document.querySelector('#resul').innerHTML = resul
}

function sub() {
    
    let n1 = Number(document.querySelector('#n1').value)
    let n2 = Number(document.querySelector('#n2').value)
    let resul = n1-n2

    document.querySelector('#resul').innerHTML = resul
}

function mul() {
    
    let n1 = Number(document.querySelector('#n1').value)
    let n2 = Number(document.querySelector('#n2').value)
    let resul = n1*n2

    document.querySelector('#resul').innerHTML = resul
}

function div() {
    
    let n1 = Number(document.querySelector('#n1').value)
    let n2 = Number(document.querySelector('#n2').value)
    let resul = n1/n2

    document.querySelector('#resul').innerHTML = resul
}

function clr() {
    document.querySelector('#resul').innerHTML = " "
}