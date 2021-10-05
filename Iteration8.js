//Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array 
//- comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false. 
const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];
  let counter = 0;
  function repeatCounter(array,word) {
    for (let index = 0; index < array.length; index++) {
        if(array[index].includes(word)) {
            counter += 1
        }    
    }
    console.log(counter)
  }
  repeatCounter(counterWords,"repeat")