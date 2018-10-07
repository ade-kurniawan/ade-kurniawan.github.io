/*Logic Challenge - Mengelompokkan Hewan
Problem

Diberikan sebuah function groupAnimals(arr) yang menerima satu parameter berupa array yang berisi string. Function akan me-return array multidimensi dimana array tersebut berisikan kategori/kelompok array yang dikumpulkan sesuai dengan abjad depannya. Abjad harus berurut dari a-z (jika ada). Untuk kasus ini, anggap saja semua text lowercase.

Contoh jika animals adalah ["ayam", "kucing", "bebek", "bangau", "zebra"]

maka akan menampilkan output: [ [ "ayam" ], [ "bebek", "bangau" ], [ "kucing ], [ "zebra" ] ]

Urutan hewan dalam array setiap pengelompokan huruf tidak penting.
Code
*/

function groupAnimals(animals) {
  
  var sortAnimals2 = [];
  var tmp = [];
  for(var i = 0 ; i < animals.length ; i++){
    for(var j = i + 1; j < animals.length; j++){
      if(animals[i][0] === animals[j][0]){
        tmp.push(animals[i]);
        tmp.push(animals[j]);
        sortAnimals2.push(tmp);
        tmp =[];
      }
    }
  }
  
  sortAnimals2.sort()

  var sortAnimals = animals.sort();
  var result = [];
  var group = [];
  var abcd  = sortAnimals[0][0];
  
  for(var k = 0; k < sortAnimals.length; k++){
      if(sortAnimals[k][0] === abcd){
          group.push(sortAnimals[k])
      } else {
          result.push(group);
          group = [];
          abcd = sortAnimals[k][0];
          group.push(sortAnimals[k]);
      }
  }
  
  result.push(group);
  
  var increment = 0;
  for(var m = 0; m < result.length ; m++){
      if(result[m].length === 2){
          result.splice(m,1,sortAnimals2[increment])
          increment += 1;
      }
  }
  
  return result;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]