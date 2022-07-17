let a = 7;
let b = 4;
let c = 1;

//Imprime los numeros de menor a mayor

if(a < b){
    if(a < c){
        console.log(a);
    if( b < c){
        console.log(b);
        console.log(c);
    }
    else{
        console.log(c);
        console.log(b);
    }
    }
    else{
        console.log(c);
        console.log(a);
        console.log(b);
    }
}
else{
    if(b < c){
        console.log(b);
        if( a < c){
            console.log(a);
            console.log(c)
        }
        else{
            console.log(c);
            console.log(a);
        }
    }
    else{
        console.log(c);
        console.log(b)
        console.log(a);
    }

}