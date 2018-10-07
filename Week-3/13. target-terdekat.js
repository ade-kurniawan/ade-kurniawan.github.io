/*Logic Challenge - Target Terdekat
Problem

Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
Code
*/

function targetTerdekat(arr) {
  var indexO = arr.indexOf('o');
  var distance = 0;
  var dTerdekat = arr.length;
  
  if (arr.indexOf('x') === -1) {
    return 0;
  }
  
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === 'x') {
      distance = Math.abs(i - indexO);
      if (distance < dTerdekat) {
        dTerdekat = distance;
      }
    }
  }
  
  return dTerdekat;
}


// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2