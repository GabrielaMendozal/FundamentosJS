function sumaDeNumeros( num1, num2){
    let resultado = num1 + num2;
    return resultado;
}

function imprimeArreglo( arr){
    for (let i=0; i< arr.length; i++){
        console.log( arr[i]);
    }
}

function imprimeHola(){
    console.log("Hola como estan!");
}

let res = sumaDeNumeros( 20,30);
console.log( res );

let res2 = sumaDeNumeros( 80,100);
console.log(res2);

let x = 1;
let y = 2;

let res3 = sumaDeNumeros( x,y );
console.log( res3 );

imprimeHola();

let nums = [10,20,30,40,50];
imprimeArreglo( nums);

let nombres = ["Alex", "Marta", "Julia", "Juan"];
imprimeArreglo( nombres);