
const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(avengers) {
      
    let avengerBiggest = "";
  
    for (let index = 0; index < avengers.length; index++) {
      console.log(avengers[index]);
      if (avengers[index].length > avengerBiggest.length) {
        avengerBiggest = avengers[index];
      }

    }
    console.log("Nombre más largo: ", avengerBiggest);
  }
  
  findLongestWord(avengers);