let mySymbol=Symbol("abs");

//Object keys can only be of type string or 
//object have properties and methods(functions stored a sproperties)
const details={
    name:"Muqaddas",
    "last name":"Zahra",  //key can't be written as last name because of space between. Needed to be written as "last name"
    age:23,
    [mySymbol]:"abc", //symbol type key
    university:"GCU",
    passed: true,
    grade:"3.34",
    message: function()     //object method, stored in properties as function def
             {
                 console.log("Stay Strong")
                 return "Stay Happy"
             }
}

//accessing objects properties
console.log(details.age);  //23
console.log(details["age"]);  //23 
console.log(details["last name"]);  //Zahra -  coudn't be accessed as details.last name because of space between
console.log(details[mySymbol]);  //abc -- s symbol type key is accessed as --> details.[key]
console.log(details);   /*{age: 23 
                          last name: "Zahra"
                          name: "Muqaddas"
                          passed: true
                          university: "GCU"
                          Symbol(abs): "abc"}*/

console.log(details.message());  /*Stay Strong
                                   Stay Happy*/

console.log(details.message); /*ƒ ()
                              {
                                  console.log("Stay Strong")
                                  return "Stay Happy"
                              }     */  
                              

const Pakistan={
    flag: "green & white",
    language: "Urdu",
    provinces:{1:"Punjab", 2:"Sindh" , 3:"KPK", 4:"Balochistan"}

}
console.log(Pakistan.provinces["3"]); //KPK
//console.log(Pakistan.provinces.3);  can't be accessed like this 


//Objects Merging
//Object.assign(target,source)

console.log("...................................");
//const obj2=Object.assign({details,Pakistan);   //Pakistan will be copied to details 
const obj2=Object.assign({},details,Pakistan);   //details and Pakistan Objects will be copied to {} empty Object
console.log(obj2);               //obj2 has a new object that has contents of both details and Pakistan
console.log(details);            //details obj is same as before
console.log("....................................");


const obj3=Object.assign(details,Pakistan); //Pakistan is copied to details -- resulted obj is stored in obj3
console.log(obj3);      /*{age:23
                         flag: "green & white"
                         grade: "3.34"
                         language: "Urdu"
                         last name: "Zahra"
                         message: ƒ ()
                         name: "Muqaddas"
                         passed: true
                         provinces: {1: 'Punjab', 2: 'Sindh', 3: 'KPK', 4: 'Balochistan'}
                         university: "GCU"
                         Symbol(abs): "abc"}*/
console.log(details); //details is same as obj3
console.log(details==obj3); //true --> same reference
obj3.name="Arooj"
console.log(details.name);  //Arooj--> changes in obj3 reflected in details as both have the same reference points


//another way of merging other than assign method
const obj4={...Pakistan,...details}
console.log(obj4);     //same as obj3


//keys-->returns all keys in an array---only string keyed property names, sybol keyed properties not included
console.log(Object.keys(obj4)); //['flag', 'language', 'provinces', 'name', 'last name', 'age', 'university', 'passed', 'grade', 'message']

//values-->returns all values in an array  ---only string-keyed-property values (symbol type keys not included) 
console.log(Object.values(obj4)); //['green & white', 'Urdu', {…}, 'Arooj', 'Zahra', 23, 'GCU', true, '3.34', ƒ]


//entires--> return array of subarrays consiting of key value pairs (only string keyed)
console.log(Object.entries(obj4)); //[ [],[],[]]


//seal-->seals an object, prevents extensions, new properties can't be added, exisiting properties can't be delted
Object.seal(details);
details.position="1st";
console.log(details); //returns details object same as before sealing, position property is not added.
delete details.age;
console.log(details);  //age property still present, age prop isn't deleted because the obj is sealed
details.age=22
console.log(details.age); //22 --age property changed, sealing object allows changes in existing properties if they're writable

console.log(Object.isSealed(details)); //true



//freeze--->same as seal with a change that now exisiting values can't be changed even
Object.freeze(details);
details.age=23;
console.log(details.age); //22 -->age isn't changed as the object was freeze

console.log(Object.isFrozen(details)); //true



//fromEntries-->changes list of key value pairs into object
let counting=[[1, "one"], ["2","two"]]
let countingOnj=Object.fromEntries(counting)
console.log(countingOnj);    //{1: 'one', 2: 'two'}
console.log(typeof Object.fromEntries(counting)) //object
console.log(countingOnj["1"]); //one
console.log(countingOnj["2"]); //two


//hasOwn-->tells if the property is of the object on its own and not inherited --returns true or false
console.log(Object.hasOwn(details, "age"));  //true
console.log(Object.hasOwn(details, "position"));  //false-->property doesn't exist


//Objects Destructuring
const {name, age, university}=details;
console.log(name);   //Arooj
console.log(age);    //22
console.log(university);   //GCU

const {grade:gpa}=details  //destructure details object and call grade as gpa
console.log(gpa); //3.34



