const squadre = [
    {
        nome : 'milan',
        punti : 0,
        falli : 0
    }, {
        nome : 'juve',
        punti : 0,
        falli : 0
    }, {
        nome : 'inter',
        punti : 0,
        falli : 0
    }, {
        nome : 'napoli',
        punti : 0,
        falli : 0
    }
]

squadre.forEach((element) =>{
    element.punti = random()
    element.falli = random()

})

console.log(squadre);

let newSquadre = squadre.map( ({ nome, falli}) =>{
    return {nome, falli}
})

console.log(newSquadre);

//funzione per creare numeri casuali
function random (){
    return Math.floor(Math.random() * 99) + 1;
}