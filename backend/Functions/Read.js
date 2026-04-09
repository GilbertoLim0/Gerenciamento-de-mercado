export function findProductByName(database, name) {
    return database.find(product => product.name = name)
}