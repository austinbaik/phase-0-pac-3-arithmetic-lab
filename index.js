function add(x,y){
    return x+y; 
}
console.log(add(1,80));

function subtract(a,b){
    return a-b;
}
console.log(subtract(60-40));
//why did i have to chance the param letter for this to work? 

function multiply(x,y){
    return x*y;
}
console.log(multiply(2,3.4));

function divide(x,y){
    return x/y;
}
console.log(divide(5.0,2.5));

{
    number = 4;

    function increment(number) {
    return (number +=1)
    }

    function decrement(number) {
    return (number -=1)
    }
}



function makeInt(string){
    return (parseInt(string, 10));
    ;
  }
  
  makeInt(2.2222);


  function preserveDecimal(string){
    return (parseFloat(string));
  
  }
  
  preserveDecimal(2.2222);