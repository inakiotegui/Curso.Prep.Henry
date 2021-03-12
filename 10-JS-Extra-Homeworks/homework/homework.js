// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var hola = [];
  var chau = [];
  for (let clave in objeto){
    chau.push(clave);
    chau.push(objeto[clave]);
    hola.push(chau);
    chau = [];
  }
  return hola;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var hola = {};
  for (let i=0; i<string.length ; i++){
    if (hola.hasOwnProperty(string[i])){
      hola[string[i]]= hola[string[i]]+1;
    }
    else {
      Object.defineProperty(hola, string[i], {
        value:1,
        writable: true,
        configurable: true,
        enumerable: true})
    }
  }
  return hola;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var hola = '';
  var chau = '';
  var fin = '';
  for (let i=0 ; i<s.length; i++){
    if (s[i]===(s[i].toUpperCase())){
      hola=hola+s.charAt(i);
    }
    else{
      chau = chau+s.charAt(i);
    }
  }
  fin = hola+chau;
  return fin;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var hola = str.split(' ');
  var chau = '';
  var fin = [];
  for(let i=0; i<hola.length; i++){
    for(let j=hola[i].length-1; j>=0; j--){
      chau = chau+hola[i].charAt(j);
    }
    fin.push(chau);
    chau = '';
  }
  return fin.join(' ');
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var hola = numero.toString();
  var chau = '';
  for ( i=hola.length-1; i>=0; i--){
    chau = chau + hola.charAt(i);
  }
  if (numero ==chau){
    return 'Es capicua';
  }
  else return 'No es capicua';
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var hola = '';
  for (i=0; i<cadena.length; i++){
    if (cadena[i]!=='a' && cadena[i]!=='b' && cadena[i]!=='c'){
      hola = hola+cadena.charAt(i);
    }
  }
  return hola;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var hola = [];
  hola.push(arr[0]);
  for (let i=1; i<arr.length ; i++){
    if (arr[i].length >= hola[i-1].length){
      hola.push(arr[i]);
    }
    else if (arr[i].length<hola[i-1].length && arr[i].length<hola[i-2].length){
      hola.push(hola[i-1]);
      hola[i-1]=hola[i-2];
      hola[i-2]=arr[i];
    }
    else if (arr[i].length<hola[i-1].length){
      hola.push(hola[i-1]);
      hola[i-1]=arr[i];
    }
  }
  return hola;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var hola = [];
  for(let i =0 ; i<arreglo1.length; i++){
    for (let j=0; j<arreglo2.length;j++){
      if (arreglo2[j]===arreglo1[i]){
        hola.push(arreglo2[j]);
      }
    }
  }
  return hola;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

