//No.1

var row1 = 5

for (row1=1; row1<=5; row1++) {
    console.log ("*")
}
console.log ("")

//No.2

var i=5,
    j=5,
    row2='';

for(i=1; i<=5; i++) {
   for (j=1; j<=5; j++) {
    row2=row2+("*");        
      }
 console.log(row2);
 row2='';
}


//No.3

var x=5,
    y=5,
    ast='';
for(x=0; x<=5; x++)
{
   for (y=0; y<x; y++)
     {
    ast=ast+("*");        
      }
 console.log(ast);
 ast='';    
}