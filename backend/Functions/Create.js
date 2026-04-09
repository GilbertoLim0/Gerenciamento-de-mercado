export function createProducts(novoNome, novaMarca, novoPreco, novaCategoria, novaQuantidade) {
    produto = {
        nome: novoNome,
        marca: novaMarca,
        preco: novoPreco,
        categoria: novaCategoria,
        quantidade: novaQuantidade
    }
    return produto
}