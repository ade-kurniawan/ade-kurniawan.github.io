//No.1

function shoutOut () {
    return ("Halo Function");
}

console.log(shoutOut ());

//No. 2
console.log("")

function calculateMultiply() {
    hasilPerkalian= num1 * num2
    return hasilPerkalian;
}

var num1 = 5;
var num2 = 6;  
var hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian);

//No.3
console.log ("");

function processSentence (){
    fullSentence= "Nama saya " + name + ", umur saya " + age + ", alamat saya di " + address + " dan saya punya hobby yaitu " + hobby + ".";
    return fullSentence;
};
    

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence); 