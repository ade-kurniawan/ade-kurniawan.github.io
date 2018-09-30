function balikKata(kata) {
  var kata;

  if (kata === "")
      return "";
    else
      return balikKata(kata.substr(1)) + kata.charAt(0);
}

// TEST CASES
console.log(balikKata('Hello World and Coders'));
console.log(balikKata('John Doe'));
console.log(balikKata('I am a bookworm'));
console.log(balikKata('Coding is my hobby'));
console.log(balikKata('Super'));