document.querySelector('button').addEventListener('click', () => {
    if (document.querySelector('p').style.display === 'none') {
        document.querySelector('p').style.display = 'block'
    } else {
        document.querySelector('p').style.display = 'none'
    }
    
})