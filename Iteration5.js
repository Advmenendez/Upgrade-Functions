//Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume


const mixedElements = [10, "pizza", 45, "Pepe", 3, "gato", 80, "macarrones"];
function calculateAverageThings(cualquierArray) {
    let counter = 0;
  
    for (let i = 0; i < cualquierArray.length; i++) {
      if (typeof cualquierArray[i] === "string") {
        counter += cualquierArray[i].length;
      }
      if (typeof cualquierArray[i] === "number") {
        counter += cualquierArray[i];
      }
    }
    return console.log(
      "La suma de los diferentes elementos es:",
      counter
    );
  }
  calculateAverageThings(mixedElements);