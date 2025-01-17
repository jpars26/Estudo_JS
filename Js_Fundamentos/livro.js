


const livro = {
    titulo: 'O Senhor dos Anéis',
    autor: 'J.R.R. Tolkien',
    lancamento: 1954,
    genero: 'Fantasia',

}


livro.anotual = new Date().getFullYear();
livro.idadePublicacao = livro.anotual - livro.lancamento;
const mostrarDetalhes = livro
livro.avaliacao = 5;
console.log(mostrarDetalhes)
delete livro.avaliacao;
console.log(livro['titulo'])
console.log(mostrarDetalhes)