var pi = Math.PI;

/*console.log(pi);

console.log(Math.min(1,2,3,4645,0,-10));
console.log(Math.max(1,2,3,4645,0,-10));
console.log(Math.round(4.5));
console.log(Math.floor(4.8));
console.log(Math.ceil(4.2));*/

var aleatorio = Math.random();

function generarNumero(numeroMaximo){
    return Math.round(Math.random() * numeroMaximo)
}
console.log(generarNumero(100));