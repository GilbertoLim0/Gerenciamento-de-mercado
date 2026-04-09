export function updateProduct(novoNome, novaMarca, novoPreco, novaCategoria, novaQuantidade) {
    return {
        nome: novoNome,
        marca: novaMarca,
        preco: novoPreco,
        categoria: novaCategoria,
        quantidade: novaQuantidade
    }
}