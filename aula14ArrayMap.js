var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var nums = numeros.map(function(valor){
    
    return valor * 2;

});

console.log(nums);

var funcionarios = [

    { nome: "Davi", idade: 18 },
    { nome: "João", idade: 46 },
    { nome: "Tarllis", idade: 40 },
    {nome: "Laryssse", idade: 30},
]

nomes = funcionarios.map(pessoa => pessoa.nome);

console.log(nomes);
