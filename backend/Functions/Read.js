export function findProductByName(database, name) {
    return database.find(product => product.name = name)
}

export function readAllProduct(database) {
    return database.array.forEach(product => {
        console.log(
            "ID: " + product.id +
            "Nome: " + product.nome +
            "Marca: " + product.marca +
            "Preço: " + product.preco +
            "Categoria: " + product.categoria +
            "Quantidade: " + product.quantidade 
        )
    });
}