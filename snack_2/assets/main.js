const squadre = [
    {
        nome : 'milan',
    }, {
        nome : 'juve',
    }, {
        nome : 'inter'
    }, {
        nome : 'napoli'
    }
]

function random (){
    return Math.floor(Math.random() * 9) + 1;
}

console.log(random());