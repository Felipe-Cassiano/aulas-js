document.querySelector('[data-img]').addEventListener('click', () => {
    if (document.querySelector('[data-img]').src == "http://127.0.0.1:5500/aula-11/dark-mode/imgs/sol.png") {
        document.querySelector('body').style.backgroundColor = 'black'
        document.querySelector('[data-img]').setAttribute('src', './imgs/lua.png')
    } else {
        document.querySelector('body').style.backgroundColor = 'white'
        document.querySelector('[data-img]').setAttribute('src', './imgs/sol.png')
    }
})