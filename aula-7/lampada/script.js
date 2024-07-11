function chngPers(filename, persNome) {
    document.querySelector('#personagem').setAttribute('src','images/'+filename)
    document.querySelector('#personagem').setAttribute('data-personagem',persNome)
}



function pegarPersonagem() {
    let personagem = document.querySelector('#personagem').getAttribute('data-personagem')
    alert(personagem)
}