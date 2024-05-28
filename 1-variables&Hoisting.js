/*Hoisting: Before execution, memory is created in which
            variables are stored with the value undefined, and whole function code is stored
            that's why variables (declared with var) and functions can be accessed before the line of code declaring them gets executes.
*/

console.log(name);  //returns undefined -> concept of hoisting: before execution, in memory creation phase, varibales are assigned "undefiend"
var name="Muqaddas";

//-------------------------------------------------------

console.log(getname)  //returns whole function-> concept of hoisting: before execution, in memory creation phase , whole function is stored in memory
console.log(getname());  //is invoked, because before execution, whole function is present in memory because of hoisting -prints what is returned
function getname()
{
    console.log("muqaddas");
    return "Muqaddas- returned from function";  //shows undefined, if there's no return statement
}

//-------------------------------------------------------

/* console.log(name1)  let and const can't be accessed before initialization.
                       They are hoisted(given values undefined in memory creation phase) 
                       but lies in script space(not in global).
                       can't be accessed until initialized*/
let name1="zahra"
// let name1="naqvi"; let can't be redeclared in same scope

/*const name;
name= "zahra";  const declaration and initialization should be on the same line*/

var name="zahra"; //var can be redeclared
console.log(name); 

function redeclare()
{
    let name1="redeclared zahra";  //let variable can be redeclared in a different scope
    console.log(name1)
}
redeclare();

const number=10;
// number=11;  type error: assignment of any other value to constant varibale


//-------------------------Block and Function Scope-----------------------------------------------------------------------------

let letscopecheck=1

if(true)
{
    let letscope=2;
    letscope++;

    let letscopecheck=2;
    letscopecheck++;

    var varscope=2;
    varscope++;
}
//console.log(letscope); let& const are block-scoped- can't be accessed outside of block
console.log(varscope);   // output:3 , var is not block scoped , can be accessed outside of block
console.log(letscopecheck); //output1 ---from outside of block



function letvarscope()
{
    let scopelet=1;
    var scopevar=2;
}
//console.log(scopevar); var is function scoped,can't be accessed outide of a function
