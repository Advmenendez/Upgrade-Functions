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
  function repeatCounter(cualquierArray) {
    let counter = {};
  
    for (let i = 0; i < cualquierArray.length; i++) {
      if (cualquierArray[i] in counter) {
        counter[cualquierArray[i]]++;
      } else {
        counter[cualquierArray[i]] = 1;
      }
    }
    return console.log(counter);
  }
  
  repeatCounter(counterWords);