var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var tot = numeros.reduce(function (total, numero) {
    return total + numero;
});
