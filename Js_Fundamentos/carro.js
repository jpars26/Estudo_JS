
const carro = {
    marca: 'Fiat',
    modelo: 'Uno',
    placa: 'ABC1234',
    ano: 2020,
    cor: 'Vermelho',
}
carro.duvidoso = 'Sim';
carro.modelo = 'Palio';

for(let prop in carro) {
    console.log(prop, carro[prop]);
}

