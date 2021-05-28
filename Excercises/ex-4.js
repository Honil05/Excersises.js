/*
Autor/Retado por: Jon Mircha
12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
*/

import {notfound} from "./exceptions.js"

(function(c,n){

c.log("12) Funcion que indica si un numero es Primo");

const primo = (num) => {

    let i;
    if(n(num) || num === undefined || num === "") return notfound();
    if(Math.sign(num) === -1) return c.warn("Los numeros primos no pueden ser negativos");
    (num <= 2) ? i = 1 : i = 2;
    
    for(i ; i <= num; i++){

        if(num%i === 0) return c.log(`El ${num} no es un numero primo`);
        else return c.log(`El ${num} es un numero primo`);
    }
}

primo(7);

c.log("13) Funcion que indica si un numero es par o no");

const parImpar = (num) => {

    if(n(num) || num === undefined || num === "") return notfound();
    if(Math.sign(num) === -1) return c.warn("Los numeros primos no pueden ser negativos");

    (num%2 === 0) ? c.log(`El ${num} es un numero par`) : c.log(`El ${num} es un numero impar`);
}

parImpar(29);

c.log("14) Funcion que convierte ºC a ºF y viceversa");

const gradesCF = (num, grade="") => {

    if(n(num) || num === undefined || num === "") return notfound();
    if(grade.toLowerCase() !== "c" && grade.toLowerCase() !== "f") return notfound();
    
    (grade === "c") 
        ? c.log(`${num}ºC equivalen a: ${((num * (9/5)) + 32)}ºF`) 
        : c.log(`${num}ºF equivalen a: ${((num - 32) * (9/5))}ºC`);
}

gradesCF(0,"c");

}(console, isNaN));