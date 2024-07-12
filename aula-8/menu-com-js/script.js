document.querySelector('#menu-opener').addEventListener('click', () => {
    if (document.querySelector('#menu-area').style.width == '200px') {
        document.querySelector('#menu-area').style.width = '0'
    } else {
        document.querySelector('#menu-area').style.width = '200px'
    }
})