/*Directions
Buatlah sebuah fungsi dengan nama balikString. Fungsi ini akan menerima argumen sebuah string dan mengembalikan kebalikannya.

Example
//input "hello world!"
//output
"!dlrow olleh"
*/

function balikString(str) {
    var baruString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        baruString += str[i];
    }
    return baruString;
}

console.log(balikString("hello world!"));