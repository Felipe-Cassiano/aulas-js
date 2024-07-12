let paragrafo = document.createElement('p')
document.querySelector('#opcao').addEventListener('change', () => {
    if (document.querySelector('#opcao').value === '2') {
        document.querySelector('input').disabled = true
        paragrafo.textContent = 'DESABILITADO'
        document.body.appendChild(paragrafo)
    } else {
        document.querySelector('input').disabled = false
        document.body.removeChild(paragrafo)
    }
})