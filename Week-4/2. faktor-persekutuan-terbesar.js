/*
Diberikan sebuah function fpb(angka1, angka2) yang menerima dua parameter angka. Function akan mengembalikan nilai FPB (Faktor Persekutuan Terbesar). FPB dari dua bilangan merupakan bilangan bulat positif terbesar yang dapat membagi habis kedua bilangan tersebut.
*/

function fpb(a, b){
    var pembagi = 2, 
        pembagiTerbesar = 1;
  
    if (a < 2 && a > 0 || b < 2 && b > 0){
        return 1;
    }        
    
    while(a >= pembagi && b >= pembagi){
     if(a %pembagi == 0 && b% pembagi ==0){
        pembagiTerbesar = pembagi;      
      }
     pembagi++;
    }
    return pembagiTerbesar;
  }
  
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1