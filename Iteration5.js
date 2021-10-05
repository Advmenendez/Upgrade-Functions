//Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume



const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(param) {
    let sumString = 0 ;
    let sum = 0;
    
    for (let i = 0; i < mixedElements.length; i++) {
        if(mixedElements[i].length === String){
            sumString += mixedElements[i];
        }
        else {
            sum += mixedElements[i]
           
        }
    
    }
  let sumTotal = sum + sumString;
  console.log(sumTotal)
}
averageWord()