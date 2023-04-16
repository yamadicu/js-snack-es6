const bici = [
    {
        nome : 'marco',
        peso : '12'
    }, {
        nome : 'giulio',
        peso : '10'
    }, {
        nome : 'paolo',
        peso : '15'
    }, {
        nome : 'franco',
        peso : '5'
    }, {
        nome : 'andrea',
        peso : '8'
    }
]

for (let i = 0; i < bici.length; i++) {

    const {nome , peso} = bici[i];
    console.log(nome, peso);
}