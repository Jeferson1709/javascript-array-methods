function calcularValorTotalDeLivrosDisponiveis(livros) {
  return livros.reduce((acc, livro) => acc + Number(livro.preco), 0);
}
