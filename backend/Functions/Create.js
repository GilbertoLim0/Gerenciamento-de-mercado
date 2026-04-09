export function createProducts(idNew,novoNome, novaMarca, novoPreco, novaCategoria, novaQuantidade) {
    produto = {
        id: idNew,
        nome: novoNome,
        marca: novaMarca,
        preco: novoPreco,
        categoria: novaCategoria,
        quantidade: novaQuantidade
    }
    return produto
}