/*
Autor/Retador: Jon Mircha
5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
 */

import {notfound} from "./exceptions.js";

(function(c,n){

c.log("5) Funcion que invierte las palabras de un texto");

    const inverse = (text="") => (!text || n(text) === false) ? notfound() : c.info(text.split('').reverse().join(''));

inverse("Hola Mundo");

c.log("6) Funcion que cuenta el numero de veces que se repite una palabra");

const counter = (text="", word="") => {
    
      if(!text || !word) return notfound();
      if(n(text) === true && n(word) === true) {
        
        let i = 0,
          count = 0;

        while(i !== -1){
            i = text.indexOf(word, i);
            if(i !== -1){
                i++;
                count++;
            }
        } return c.info(`La palabra ${word} se repite ${count} veces`);

      } else {notfound();}
}

counter("Hola mundo, adios mundo", "mundo");

c.log("7) Funcion que valida si es palindromo");

    const palindromo = (word="") => {

      if(!word || n(word) === false) return notfound();
      word = word.toLowerCase();
      const reverse = word.trim().split('').reverse().join('');
      (reverse === word.trim()) ? c.log("true") : c.log("false");

}

palindromo("salas");

c.log("8) Funcion que elimina cierto patron de caracteres de un texto");

    const delet = (text="", char="") => {

      if(!text || !char) return notfound();
      (n(text) === true && n(char) === true) ? c.info(text.replace(new RegExp(char, "ig"), '')) : notfound();
}

delet("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");

}(console, isNaN));

