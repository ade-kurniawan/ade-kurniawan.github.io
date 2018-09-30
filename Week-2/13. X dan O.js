function xo(str) {
  var stringsearch = "x";
  for(countX=-1,index=-2; index != -1; countX++,index=str.indexOf(stringsearch,index+1));
  
  var stringsearch = "o";
  for(countO=-1,index=-2; index != -1; countO++,index=str.indexOf(stringsearch,index+1));

  if (countX==countO) {
    return ("true");
  }
  else {
    return ("false");
  }
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true