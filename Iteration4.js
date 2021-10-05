const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(param) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
       sum += numbers[i]
    }
    let promedio = sum / numbers.length;
    console.log(promedio);
}

average()