var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var resultado = numeros.filter((item) => item % 2 == 0);
console.log(resultado);
var numeroFiltrados = numeros.filter(function (valor) {
  return valor > 5;
});

console.log(numeroFiltrados);
function buscarValores(valor) {
  return valor < 5;
}
var numerosEncontrados = numeros.filter(buscarValores);
console.log(numerosEncontrados);

var r1 = numeros.filter((valor) => {
  return valor > 5;
});
console.log(r1);
var r2 = numeros.filter((valor) => valor > 5);

var funcionarios = [
  { nome: "Davi", idade: 18 },
  { nome: "João", idade: 46 },
  { nome: "Tarllis", idade: 40 },
  { nome: "Laryssse", idade: 30 },
];

var pessoasListagem = funcionarios.filter(function (valor) {
  console.log(valor.nome);
  return valor.nome.length < 5;
});
console.log(pessoasListagem);

var produtos = [
  { id: 1, descrição: "SmartPhone", categoria: "Eletronico" },
  { id: 2, descrição: "Notebook", categoria: "Eletrodomestico" },
];

var produtosCategorias = produtos.filter(function (valor) {
  console.log(valor.descrição);
  return valor.categoria;
});
console.log(produtosCategorias);
