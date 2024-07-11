// document.querySelector('button').addEventListener('click', () =>{
//     document.querySelector('#minhaDiv').classList.add('classe1', 'classe2', 'classe3')
//     document.querySelector('#minhaDiv').textContent = 'Essa div foi alterada'
// })

document.querySelector('#btn1').addEventListener('click', () =>{
    document.querySelector('#style-text').style.backgroundColor = 'blue'
})
document.querySelector('#btn2').addEventListener('click', () => {
    document.querySelector('#style-text').style.backgroundColor = 'transparent'
})
document.querySelector('#btn3').addEventListener('click', () => {
    document.querySelector('#style-text').style.color = 'red'
})
document.querySelector('#btn4').addEventListener('click', () => {
    document.querySelector('#style-text').style.color = 'black'
})
