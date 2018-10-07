/*Logic Challenge - Pasangan Angka Terbesar
Problem
Diberikan sebuah function pasanganTerbesar(angka) yang menerima 1 parameter berupa angka. 
Functiona akan menentukan pasangan dua digit angka mana yang paling besar dan me-return angka 
tersebut. Contoh, jika angka adalah 183928, maka function akan me-return 92, pasangan dua digit 
angka yang paling besar diantara yang lainnya.

Code
function pasanganTerbesar(num) {
  // you can only write your code here!
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
*/


function biggestPair (num) {
    var highestInt = 0;
    var nextHighestInt = 0;

    var output = [];
    var sNumber = num.toString();
    for (var i = 0, len = sNumber.length; i < len; i += 1) {
        output.push(+sNumber.charAt(i));
    }

    for (var i=0; i<output.length; i++) {
        if (output[i] >= output[i+1] && output[i] > highestInt) {
            highestInt = output[i];
            nextHighestInt = output[i+1];
        } else if(output[i] < output[i+1] && output[i] > highestInt) {
            highestInt = output[i];
            nextHighestInt = output[i+1];
        }
        


    }
    return highestInt.toString() + nextHighestInt.toString();
}

console.log(biggestPair(641573)); // 73
console.log(biggestPair(12783456)); // 83
console.log(biggestPair(910233)); // 91
console.log(biggestPair(71856421)); // 85
console.log(biggestPair(79918293)); // 99