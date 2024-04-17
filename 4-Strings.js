let name="Muqaddas Zahra"
console.log(name.length);  //14 - including space, would have been 15 if tab used --tab=2spaces

//template string allow multiline strings
console.log(`My name is Muqaddas
This is JS Dive deep
Topic: Strings`)

//string interpolation
console.log(`My name is ${name}`)

//---------------------------------------------------------------------------------------------------------

console.log("...................");
let string1=new String("Zahra");
let string2= new String("Zahra");
console.log(string1 +"\n"+ string2)
console.log(string1==string2); //false, objects are compared by reference


let string="Zahra"
console.log(string==string1);  //equal in value
console.log(string===string1); //not equal in type , obj1 is of object type


//----------------------------------------------String Comparison---------------------------------------------

console.log(".........................");
console.log("zahra"<"Zahra");  //false   ----> small letter > capital letter 
console.log("zahra"=="Zahra");  //false
console.log("zahra">"Zahra");   //true
console.log("zara"<"zAra");   //false
console.log("zahra" > "zaara");  //true za same , h>a  ---> compared letter alphabetically a<b 


//----------------------------------------------String Methods---------------------------------------------------


//-----------------------------charAt &at --------------------------

console.log("..............................");
console.log("Muqaddas".charAt(3));  //a
console.log("Muqaddas".at(7));  //s

console.log("Muqaddas".charAt(8));  // (returns empty string)
console.log("Muqaddas".at(8));  // (returns undefined)

console.log("Muqaddas".charAt(-1));  // (returns empty string)
console.log("Muqaddas".at(-1));  //s --starts from end ---> last letter -1

console.log("Muqaddas".charAt(-3)); //empry string
console.log("Muqaddas".at(-3));  //d --starts from end ---> last letter -1
console.log("Muqaddas".at(-6));  //q --starts from end ---> last letter -1
console.log("Muqaddas".at(-9));  //undefined


console.log(string.charAt(5));  //empty
console.log(string[5]);   //undefined    
string[0]="A";           //doesn't work--- property access is read only
console.log(string);


//-------------------------------------Extracting Parts of String (slice, substring, substr)--------------------------

let stringToSlice="MyCountryIsPakistan"
console.log(stringToSlice.slice(3,7)); //ount -- end is not included
console.log(stringToSlice.substring(3,7)); //ount -- end is not included
console.log(stringToSlice.substr(3,7)); //ountryI -->second param tells lenght of string

console.log(stringToSlice.slice(3)); // ountryIsPakistan---? starting from index 3, all remaining string

console.log(stringToSlice.slice(20)); // empty string
console.log(stringToSlice.substring(20)); // empty string

console.log(stringToSlice.slice(-3)); //tan---> starts from end with last letter starting at -1
console.log(stringToSlice.substr(-3)); //tan---> starts from end with last letter starting at -1
console.log(stringToSlice.substring(-3)); //MyCountryIsPakistan--> -ve value is treated as 0 in substring 

console.log(stringToSlice.slice(-3,-6)); //empty string----can't print in reverse
console.log(stringToSlice.substring(-3,-6)); //empty string---- -ve value is treated as 0 in substring 

console.log(stringToSlice.slice(-6, -3)); //kis --> starts from end with last letter starting at -1
console.log(stringToSlice.substr(-6, -3)); //empty string

console.log(stringToSlice.slice(-6,2)); //empty string  --can't roll back 
console.log(stringToSlice.substring(-6,2)); //My ---> -ve values treated as 0 in substring 
console.log(stringToSlice.slice(-6,0)); //empty string---can't roll back


//-------------------------------trim-- removes white spaces-------------------------

//removes whitespaces from sides of string
console.log("................");
let stringToTrim="  My Country Is Pakistan  "
console.log(stringToTrim.length);        //26
console.log(stringToTrim.trim().length);  //22 -- removed two white spaces from each side of string
console.log(stringToTrim.trimStart().length);  //24 -- removed two white spaces from start of string
console.log(stringToTrim.trimEnd().length);  //24 -- removed two white spaces from end of string


//----------------------------padStart and padEnd-----------------------

//It pads a string with another string (multiple times) until it reaches a given length.
console.log(".........");
let stringToPad="Pakistan"
console.log(stringToPad.padStart(17, "P"));         //PPPPPPPPPPakistan
console.log(stringToPad.padStart(17, "Pakistan"));   //PakistanPPakistan
console.log(stringToPad.padStart(17, 92345));   //923459234Pakistan
console.log(stringToPad.padStart(17, true));   //truetruetPakistan-->true converts to string

console.log(stringToPad.padEnd(17, "P"));         //PakistanPPPPPPPPP
console.log(stringToPad.padEnd(17, "Pakistan"));   //PakistanPakistanP
console.log(stringToPad.padEnd(17, 92345));   //Pakistan923459234
console.log(stringToPad.padEnd(17, true));   //Pakistantruetruet



//---------------------------------------repeat------------------------------

//return number of copies of string----string.repeat(count)
console.log("Pakistan".repeat(3));

//------------------------------------replace and replaceAll---------------------------------

//replaces one value with other
let stringToReplace="Pakistan is Pakistan"
console.log(stringToReplace.replace("Pakistan","Kashmir")); //Kashmir is Pakistan ----only replaces the first match
console.log(stringToReplace.replace(/Pakistan/g,"Kashmir")); //Kashmir is Kashmir ----Re with flag /g to replace all matches
console.log(stringToReplace.replace("PAKISTAN","Kashmir")); //Pakistan is Pakistan ----case sensitive-- PAKISTAN didn't match with Pakistan
console.log(stringToReplace.replace(/PAKISTAN/i,"Kashmir")); //Kashmir is Pakistan -----Re with flag /i to avoid case sensitivity
console.log(stringToReplace.replace("Pakistan",9));         //9 is Pakistan
 
console.log(stringToReplace.replaceAll("Pakistan", "Kashmir")); //Kashmir is Kashmir


//--------------------------------------split---converts to array--------------------------------------------

console.log("Pakistan is my country".split(" ")); //['Pakistan', 'is', 'my', 'country'] (4)
console.log("Pakistan is , my country".split(",")); //['Pakistan is ', ' my country']] (2)
console.log("Pakistan is , my country".split()); //['Pakistan is , my country']  (1) param missing, stores whole string at index 0
console.log("Pakistan is , my country".split("")); //array of single characters