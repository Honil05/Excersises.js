/*
Autor: JonMircha
1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo. */

import {notfound} from "./exceptions.js"

(function(c,n){

c.log("Funcion que cuente el numero de caracteres de una cadena de Texto");

function count(text){

    n(text) ? c.log(text.length) : notfound();
};

count("Hola Mundo");

c.log("Funcion que devuele texto recortado segun el numero de caracter indicados");

function cutter(text,num){

    if(n(text)=== true && n(num) === false){

       text = text.slice(0, num)
       c.log(text);

    } else {

        notfound();
    }
};

cutter("Hola Mundo", 4);

c.log("Funcion que devuelve Array de textos separados por cierto caracter");

function returns(text, char){

    if(n(text) === true){

        const array = text.split(char);
        c.log(array);

    } else {

        notfound();
    }
};

returns('Hola Mundo',' ');

c.log("Funcion que repite texto x veces");

function repeater(text,num){

    if(n(text)=== true && n(num) === false){

       text = ` ${text}`;
       text = text.repeat(num);
       c.log(text);

    } else {

        notfound();
    }
};

repeater("Hola Mundo", 3);

}(console, isNaN));
