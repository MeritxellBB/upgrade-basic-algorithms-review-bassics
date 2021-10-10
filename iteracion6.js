/*Iteración #6: Función swap
Crea una función llamada swap() que reciba un array y dos parametros que sean indices del array. 
La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como 
parametro. Retorna el array resultante.*/

let miArray = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño']

function swap(miArray,pos1,pos2) {
    let eliminado = miArray[pos2];
    miArray.splice(pos2,1,miArray[pos1]);
    miArray.splice(pos1,1,eliminado);
}
// Hacer copia del elemento de posicion 2
// Cambiar el elemento de posicion2 por el de posición1

swap(miArray,0,1);
console.log(miArray);





