import promptSync from 'prompt-sync';
import { bancoDeDados } from "/Storage"
const prompt = promptSync({sigint: true})()
function main() {
    console.log(
   "\n======================================"
 + "\n📦 SISTEMA DE ESTOQUE SUPERMERCADO "
 + "\n====================================== "
 + "\n1. Adicionar Novo Produto "
 + "\n2. Listar Todos os Produtos "
 + "\n3. Buscar Produto por Nome "
 + "\n4. Editar Informações de um Produto "
 + "\n5. Registrar Entrada/Saída de Estoque "
 + "\n6. Remover Produto "
 + "\n0. Sair do Sistema "
 + "\n====================================== "
 + "\nEscolha uma opção: "
)
    switch(prompt()) {
        case 1: {
            addNewProduct()
        }
        case 2: {
            readAllproducts()
        }
        case 3: {
            readProductByname()
        }
        case 4: {
            updateProductInfo()
        }
        case 5: {
            productIO()
        }
        case 6: {
            deleteProduct()
        }
        case 0: {
            systemOut()
        }
        
    }
}

function addNewProduct() {}
function readAllproducts() {}
function readProductByname() {}
function updateProductInfo() {}
function productIO() {}
function deleteProduct() {}
function systemOut() {
    process.exit(0);
}