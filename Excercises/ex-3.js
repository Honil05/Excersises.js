/*
Autor/Retado por: Jon Mircha
9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120. */

import {notfound} from "./exceptions.js"

(function(c,n){

c.log("9) Funcion que obtiene numero aleatorio entre 501 y 600");

    const ramdon = () => c.log(Math.floor((Math.random() * (600-501+1)) + 501));
    //Formula: (Math.ramdom() * (m-n) +1 ) + m

ramdon();

c.log("10) Funcion que recibe un numero y evalua si es capicua");

const capicua = (num) => {
    
    try {

    if(n(num) || num === undefined || num === "") return notfound();
    num = num.toString();
    const evalue = num.split('').reverse().join('');
    (evalue === num) ? c.log("true") : c.log("false");

    } catch (error) {
        c.error(`Lo sentimos, ha ocurrido un error (${error})`)
    }
}
    
capicua(2002);

c.log("11) Funcion que calcula el factorial de un numero");

const factorial = (num) => {

    let total = 1;

    try {

       if(n(num) || num === undefined || num === "") return notfound();
       if(Math.sign(num) === -1) return notfound();
       if(num === 0) return c.log("1");

       for(let i = 1; i <= num; i++){
           total *= i; //total = total * i
       } return c.log(total);
    
    } catch (error) {
        c.error(`Lo sentimos, ha ocurrido un error (${error})`)
    }
}

factorial(5);

}(console, isNaN));