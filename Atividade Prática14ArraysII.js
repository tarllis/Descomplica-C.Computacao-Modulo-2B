let matriz = new Array(4);
for(let i = 0; i < 4; i++) {
 matriz[i] = new Array(5);
 for(let j = 0; j < 5; j++) {
  matriz[i][j] = (i + 2) * (j + 1);
 }
}
console.table(matriz);