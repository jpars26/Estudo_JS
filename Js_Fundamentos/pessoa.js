
const pessoa = {
    nome: "Maria",
    calcularMediaNotas: function(nota1, nota2){
        return media = (nota1 + nota2) / 2;
    },
    classificarDesempenho: function(media){
        if (media >= 9){
            return "Desempenho excelente";
        }else if (media >= 7.5){
            return "Desempenho bom";
        }else if (media >= 6){
            return "Desempenho satisfatório";
        }
        else {
            return "Desempenho insatisfatório";
        }
    }  
}

calcularMediaNotas = pessoa.calcularMediaNotas(7, 1);
classificarDesempenho = pessoa.classificarDesempenho(media);

console.log(`Olá, ${pessoa.nome}! Sua média foi de ${media} e seu desempenho foi classificado como: ${classificarDesempenho}`);