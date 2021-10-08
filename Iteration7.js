//Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array 
// comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false.


const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
  function finderName(cualquierArray, nombre) {
    for (let i = 0; i < cualquierArray.length; i++) {
      if (cualquierArray[i] === nombre) {
        return console.log(
          `Existe, está en la posición ${i} del array, y se llama ${cualquierArray[i]}.`
        );
      }
    }
    return console.log("El nombre que estás buscando no existe.");
  }
  
  finderName(nameFinder, "Natasha");