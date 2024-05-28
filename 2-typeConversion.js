//.........................Convert to String------------------------------

let number=123;
let numberToString=String(number);
console.log(numberToString);   //123
console.log(typeof numberToString); //string 

console.log(String(1+2)); //3
console.log(typeof String(1+2)); //string 

console.log(String(null));       //"null"--> a string
console.log(typeof String(undefined));  //"undefined"-->a string



//-------------------------Convert to Numbers--------------------------------

console.log("....................................................");
console.log(Number("one"));  //NaN
console.log(typeof Number("one")); //number

console.log(Number("334aabc"));  //NaN


console.log(Number("32")); //32
console.log(typeof Number("32"));  ///number

console.log(Number(true));   //1
console.log(Number(false));  //0


console.log(Number(undefined));  //NaN
console.log(Number(null)); //0
console.log(Number(""));  //0
console.log(Number(" ")); //0

//Unary + operator converts a value to number
console.log(typeof +"32"); //number ->32
console.log(typeof +"abc"); //number ->NaN

//---------------------------convertToBoolean----------------------------------

console.log("-----------------------------------------")
console.log(Boolean(0));      //false
console.log(Boolean(""));     //false
console.log(Boolean(" "));     //true
console.log(Boolean(null));   //false
console.log(Boolean(undefined));   //false
console.log(Boolean("pak")); //true
console.log(Boolean(23));   //true
 
