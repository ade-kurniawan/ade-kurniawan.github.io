/*
Diberikan sebuah function angkaPrima(angka) yang menerima satu parameter berupa angka. Function akan me-return true jika angka tersebut adalah bilangan prima. Jika tidak, return false.
*/

function angkaPrima(n){
    var pembagi = 2;
  
    while (n > pembagi){
      if(n % pembagi == 0){
       return false; 
      }
      else
        pembagi++;
    }
    return true;
  }

console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false