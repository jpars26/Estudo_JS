
import carro from './carro.js';

carro.ligado = false;
carro.ligar = function() {
    if(this.ligado) {
        console.log('Este carro já está ligado.');
    } else {
        this.ligado = true;
        console.log('O carro foi ligado.');
    }
}

carro.desligar = function() {
    if(this.ligado) {
        this.ligado = false;
        console.log('O carro foi desligado.');
    } else {
        console.log('Este carro já está desligado.');
    }
}

carro.obterDetalhes = function() {
    for(let prop in carro) {
        console.log(prop, carro[prop]);
    }
}    

carro.ligar();
 carro.desligar();
carro.obterDetalhes();