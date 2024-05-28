//---------------------Comparisons---------------

//strings are compared alphabetically

let name1="Muqaddas"
let name2="zahra"
console.log(name1>name2) //false-> M comes before Z
console.log(name2>name1) //true-> Z comes after M

console.log("a"<"z");  //true->A comes before Z
console.log("ariha"<"abiha"); //false a same , R comes after B

console.log("2"<"9") //true- 2 comes before 9
console.log("93"<"91") //false- 9 same , 3 comes after 1



//--------------------------------------Addition--------------------------------------


// + operators concatenate strings. called concatenation operator
console.log("Javascript"+" Dive Deep"); //Javascript Dive Deep


// If any of the sides is a number, Number gets converted to string and then concatenated
console.log("--------------------------");
console.log("abc"+12);   //abc12
console.log(123+"xyz");   //123xyz
console.log(1+13+"2");  // 142  -  1+13->14 gets converted to string and concatenated with 2
console.log("5"+null);  //5null -null converted to stringg


//In cases other than string, If any of side is not a number, it is converted to number
console.log(5+true); //6 - true is converted to 1
console.log(null+5) //5 - null is converted to 0
console.log(6+undefined) //NaN - undefiend is converted to NaN 


//BigInt Addition, if any of the number isn't bigInt , error is thrown
console.log("------------------------------");
console.log(1n+3n); //4n
//console.log(1n+2)   error



//--------------------------------Type Operators (typeof & instanceof)--------------------------------------

console.log("-------------------------------");
console.log(typeof "abc");    //string
console.log(typeof true);     //boolean
console.log(typeof 2);         //number
console.log(typeof NaN);         //number
console.log(typeof null);       //object
console.log(typeof undefined);   //undefined
console.log(typeof {a:1, b:2});  //object
console.log(typeof [2,3,4]);     //object
console.log(typeof function(){});  //function

console.log(typeof(typeof true));  //string-->typeof returns a string type value  - typeof true retured boolean (a string type "boolean")

function makeObject(name, subject)
{
    name=name,
    subject=subject
}

obj1=new makeObject("muqaddas","web")
obj2=new makeObject("zahra","app")
console.log(obj1 instanceof makeObject); //true
