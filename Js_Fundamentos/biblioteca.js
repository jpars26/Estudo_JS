const biblioteca = [
    { id: 1, titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", anoPublicacao: 1954 },
    { id: 2, titulo: "Dom Quixote", autor: "Miguel de Cervantes", anoPublicacao: 1605 },
    { id: 3, titulo: "1984", autor: "George Orwell", anoPublicacao: 1949 }
]

const encontrarLivroPorId = (id) => {
    return biblioteca.find(livro => livro.id === id) || null
   
}

//console.log(encontrarLivroPorId(2)) // { id: 2, titulo: 'Dom Quixote', autor: 'Miguel de Cervantes', anoPublicacao: 1605 }



const listaProdutos = [
    { id: 1, nome: "Camiseta", preco: 25.99 },
    { id: 2, nome: "Calça Jeans", preco: 49.99 },
    { id: 3, nome: "Tênis", preco: 79.99 },
    { id: 4, nome: "Boné", preco: 15.99 }
]

const filtrarOrdenarProdutosPorPreco = (minimo, maximo) => {
    const produtosFiltrados = listaProdutos.filter(produto => produto.preco >= minimo && produto.preco <= maximo)
    return produtosFiltrados.sort((a, b) => a.preco - b.preco)
}

console.log(filtrarOrdenarProdutosPorPreco(20, 60)) // [ { id: 1, nome: 'Camiseta', preco: 25.99 }, { id: 2, nome: 'Calça Jeans', preco: 49.99 } ]