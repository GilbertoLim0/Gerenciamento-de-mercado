export let autoincrement = 0 //Importar no app
export function createProducts(novoNome, novaMarca, novoPreco, novaCategoria, novaQuantidade) {
    
    return {
        id: autoincrement,
        nome: novoNome,
        marca: novaMarca,
        preco: novoPreco,
        categoria: novaCategoria,
        quantidade: novaQuantidade
    }
}