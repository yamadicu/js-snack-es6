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

let pesoMin = bici[0].peso;

//ciclo per cercare la bici più leggera
bici.forEach((element) =>{
    const {peso} = element;

    if (peso < pesoMin){
        pesoMin = element;
    }
});

console.log(pesoMin);

//stampa in pagina il riusltato
const {nome, peso} = pesoMin;

document.getElementById('stampa').innerHTML = `
<p> la bici più veloce è quella di ${nome} che pesa ${peso} </p>
`