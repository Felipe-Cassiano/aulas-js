// // // let idioma = ['português', 'japonês', 'espanhol', 'inglês', 'francês']
// // // let pais = Number(prompt('Escolha um país e veja qual língua é falada nele! \n 0 - Brasil \n 1 - Japão \n 2- Espanha \n 3 - EUA \n 4 - França '))
// // // alert(idioma[pais])

// // // //SEPARAÇÃO MUITO LEGAL

// // // let array = [0,43,124,541,756,891,14]
// // // console.log(array.reverse())


// // //------------------------------------------------------------------

// // let salarios = [1900, 2000, 1400, 1200, 300]

// // for (let index = 0; index < salarios.length; index++) {
// //     if (salarios[index]<1500){
// //         salarios[index]+=salarios[index]*0.1
// //     }
// //     console.log(salarios[index])
// // }

// // // SEPARAÇÃO MUITO LEGAL

// // let num = [1,2,3,4,5,96,7,8,9,10];
// // console.log(Math.max(...num))


// // --------------------------------------------------------------------

// // let lista = [1,2,3,4,5,6,7,8,9]

// // lista.forEach(lista => {
// //     console.log(lista)
// // });


// let filmes = ['Interestelar', 'Whiplash', 'O Menino e a Garça']

// // Add 1 no fim
// filmes.push('Vingadores')
// filmes.push('Willy Wonka')

// // Remove 1 no fim
// filmes.pop()

// // Remove 1 no começo
// filmes.shift()

// // Add 1 no começo
// filmes.unshift('Happy Feet')

// // Add o () entre os index
// console.log(filmes.join('sei la'))


// // Mostra o local do () no array
// console.log(filmes.indexOf('Vingadores'))
// console.log(filmes.indexOf('Oppenheimer'))

// let sla = "Senac SAD"
// let sla2 = sla.indexOf('nac')
// console.log(sla2)

// let lista = [1,2,3,4,5,6,7]

// console.log(lista.map(function (value) {
//     return value-1
// }))

let lista = [1,6,100,4,12]
let lista2 = []

lista2 = lista.filter(function (item) {
    if (item<20) {
        return true
    } else {
        return false
    }  
})

console.log(lista2)