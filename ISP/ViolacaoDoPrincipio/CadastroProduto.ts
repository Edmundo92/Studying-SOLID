class CadastroProduto implements ICadastro {
    validarDados() {
        // validar valor
    }
    salvarDados() {
        // inserir na tabela Produto
    }
    enviarEmail() {
        // não tem email
        // se remover esse método, vai dar erro, pois o implements obriga a user os métodos nele estabelecido
        // Por isso a necessidade de criar interface pra cada coisa, pra não ser obrigado a implementar algo que não se vai precisar nessa classe
    }
}