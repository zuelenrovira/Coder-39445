function mayorQue(n){
    return (m) => m > n;
}

let mayorQueCinco = mayorQue(5);// (m) => m > 5;
console.log(mayorQueCinco(8));

function operaciones (operacion){
    if(operacion === "sumar"){
        return (x,y) => x+y;
    }
    if(operacion === "restar"){
        return (x,y) => x-y;
    }
    if(operacion === "multiplicar"){
        return (x,y) => x*y;
    }
    if(operacion === "dividir"){
        return (x,y) => x/y;
    }
}


const suma = operaciones("sumar"); //(x,y) => x+y;
console.log(suma(8,9));

function iterador(arreglo, funcion){
    for(const numero of arreglo){
        funcion(numero);
    }
}

iterador([1,2,3,4], console.log);