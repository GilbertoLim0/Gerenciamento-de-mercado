export function productDelete(database,id) {
    return database.filter(produto => produto.id != id)
}