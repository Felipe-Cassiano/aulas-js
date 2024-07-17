document.querySelector('[data-change-gender]').addEventListener('change', () => {
    if (document.querySelector('[data-change-gender]').value == "boy.png") {
        document.querySelector('[data-img]').setAttribute('src', './imgs/boy.png')
    } else {
        document.querySelector('[data-img]').setAttribute('src', './imgs/girl.png')
    }
})


document.querySelector('[data-get-resul]').addEventListener('click', () => {
    if (document.querySelector('[data-height]').value == "" || document.querySelector('[data-weight]').value == "") {
        document.querySelector('[data-imc-value]').style.color = "red"
        document.querySelector('[data-imc-value]').innerHTML = "Preencha todos os campos"
    } else{
        let imc = Number(document.querySelector('[data-weight]').value)/(Number(document.querySelector('[data-height]').value)*Number(document.querySelector('[data-height]').value))
        document.querySelector('[data-imc-value]').innerHTML = imc.toFixed(2)
        document.querySelector('[data-imc-value]').style.color = "black"
    }
})
