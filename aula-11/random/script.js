document.querySelector('button').addEventListener('click', () => {
    const red = Math.floor(Math.random()*256)
    const green = Math.floor(Math.random()*256)
    const blue = Math.floor(Math.random()*256)
    document.querySelector('body').style.backgroundColor = '#' + red.toString(16).padStart(2, '0') + green.toString(16).padStart(2, '0')+ blue.toString(16).padStart(2, '0')
})