const contaBancaria = {
    nome: "Maria",
    saldo: 200,
    historico: [],
    titular: true,
    depositar: function(valor){
        if (valor <= 0){
            return "Valor inválido";
        }
        else {
            this.saldo += valor;
            this.historico.push({
                tipo: "Depósito",
                valor: valor
            });
            return `Depósito de R$${valor/100} realizado com sucesso!`;
        }
        

    },
    sacar: function(valor){
        if (valor <= 0){
            return "Valor inválido";
        }
        else if (valor > this.saldo){
            return "Saldo insuficiente";
        }
        else {
            this.saldo -= valor;
            this.historico.push({
                tipo: "Saque",
                valor: valor
            });
            return `Saque de R$${valor/100} realizado com sucesso!`;
        }
    },

}

const cliente = {
    nome: "Maria",
    conta: contaBancaria,
    mostrarSaldo: function(){
        return `Olá, ${this.nome}! Seu saldo atual é de R$${this.conta.saldo/100}`;
    },

}

contaBancaria.depositar(10000);
contaBancaria.sacar(500);
console.log(cliente.mostrarSaldo());