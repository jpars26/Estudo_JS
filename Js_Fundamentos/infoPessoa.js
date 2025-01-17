const pessoa = {
    nome: 'Lucas',
    idade: 22,
    cidade: 'São Paulo',
    solteiro: true,
    hobbies: ['Programar', 'Jogar', 'Estudar'],
    endereco: {
        rua: 'Rua dos bobos',
        numero: 0,
        bairro: 'Centro',
        cidade: 'São Paulo',
        estado: 'SP'
    }
}


const mostrarPessoas = (pessoa) => {
    for (let propriedade in pessoa) {
        if (typeof pessoa[propriedade] === 'object' && !Array.isArray(pessoa[propriedade])) {
            console.log(`${propriedade}: (Tipo: objeto)`);
            for (let subPropriedade in pessoa[propriedade]) {
                console.log(`  ${subPropriedade}: ${pessoa[propriedade][subPropriedade]} (Tipo: ${typeof pessoa[propriedade][subPropriedade]})`);
            }
        } else {
            console.log(`${propriedade}: ${pessoa[propriedade]} (Tipo: ${typeof pessoa[propriedade]})`);
        }
    }

    // Adiciona o ano atual
    pessoa.anotual = new Date().getFullYear();

    // Mostra a nova propriedade também
    console.log(`anotual: ${pessoa.anotual} (Tipo: ${typeof pessoa.anotual})`);
};




const pessoas = [
    {
        nome: 'Lucas',
        idade: 22,
        cidade: 'São Paulo',
        solteiro: true,
        hobbies: ['Programar', 'Jogar', 'Estudar'],
        
    },
    {
        nome: 'João',
        idade: 25,
        cidade: 'São Paulo',
        solteiro: true,
        hobbies: ['Programar', 'Jogar', 'Estudar'],
       
    },
    {
        nome: 'Maria',
        idade: 30,
        cidade: 'São Paulo',
        solteiro: true,
        hobbies: ['Programar', 'Jogar', 'Estudar'],

    }
]

const mostrarLista = (pessoas) => {
    for (let propriedade in pessoas) {
        if (typeof pessoas[propriedade] === 'object' && !Array.isArray(pessoas[propriedade])) {
            console.log(`${propriedade}: (Tipo: objeto)`);
            for (let subPropriedade in pessoas[propriedade]) {
                console.log(`  ${subPropriedade}: ${pessoas[propriedade][subPropriedade]} (Tipo: ${typeof pessoas[propriedade][subPropriedade]})`);
            }
        } else {
            console.log(`${propriedade}: ${pessoas[propriedade]} (Tipo: ${typeof pessoas[propriedade]})`);
        }
    }
    
};

pessoas.push(pessoa);

//mostrarLista(pessoas);

const filtrarPessoas = (pessoas) => {
    return pessoas.filter(pessoa => pessoa.idade >= 25);
}

console.log(filtrarPessoas(pessoas));