const squadre = [
    {
        nome : 'milan',
        punti : '0',
        falli : '0'
    }, {
        nome : 'juve',
        punti : '0',
        falli : '0'
    }, {
        nome : 'inter',
        punti : '0',
        falli : '0'
    }, {
        nome : 'napoli',
        punti : '0',
        falli : '0'
    }
]

squadre.forEach((element, fall) =>{
    const {punti} = element;
    const {falli} = fall;

    punti = random(9);
    falli = random(9);
    console.log(squadre);

})

//funzione per creare numeri casuali
function random (max){
    return Math.floor(Math.random() * max) + 1;
}

console.log(random());