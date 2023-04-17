let array = ['paolo', 'pietro', 'luca', 'marco', 'giacomo', 'franco']

let min = parseInt (prompt(`inserisci un numero compreso tra ${array.length -1}`))

let max = parseInt (prompt(`inserisci un numero compreso tra ${array.length -1}`))

let arrayFiltro = array.filter( (element, index) =>{

    if (min < index && max > index){
        return element 
    }

})

console.log(arrayFiltro);