const students=["Zahra","Areeba","Zainab","Kalsoom","Aleena"]

console.log(students.length);  //5
console.log(students[2]); //Zainab
console.log(students[-1]); /*undefined --> as [value] is the way to access properties in objects its tries to access value of key -1 which doesn't exist
                             solved with at() to retrieve last element*/


//changing array element
students[2]="Amna" 
console.log(students);  //['Zahra', 'Areeba', 'Amna', 'Kalsoom', 'Aleena']

//converting an array to a string
console.log(students.toString()); //Zahra,Areeba,Amna,Kalsoom,Aleena
console.log(students.toString().length); //32

//sort()->sorts an array alphabetically
console.log(students.sort());  //['Aleena', 'Amna', 'Areeba', 'Kalsoom', 'Zahra']
console.log(students);    //original array is same as the sorted array now 

//looping array elements
function changeArray(value)  //value param receives array elements
{
    console.log("Element:"+value);
}
students.forEach(changeArray) /*Element:Aleena
                                Element:Amna
                                Element:Areeba
                                Element:Kalsoom
                                Element:Zahra */


//push(value) adds value to last of array
students.push("Masooma");
console.log(students);  //['Aleena', 'Amna', 'Areeba', 'Kalsoom', 'Zahra', 'Masooma']

//pop()->removes last element
students.pop();
console.log(students); //['Aleena', 'Amna', 'Areeba', 'Kalsoom', 'Zahra']

//Warning-> undefined holes in array
students[6]="Atiqa";
console.log(students); //hole on position 5 ->['Aleena', 'Amna', 'Areeba', 'Kalsoom', 'Zahra', …, 'Atiqa']
console.log(students[5]);  //undefined-> as directly adding on position 6 introduces a undefined jole on position 5



/*Associative array-> JS deos not support Associative arrays(array with named indexes)
                   JS always used numbered indexes
                   if used named indexes, array will be redefined as objects and 
                   some array methods and functions will stop working correctly*/
const fruits=[];
fruits["summer"]="Mango";
fruits["winter"]="Orange";
console.log(fruits.length); //0
console.log(fruits[0]);     //undefined
console.log(fruits["summer"]);  //Mango -> accessed same like accessing objects values with key
console.log(fruits.summer);     /*Mango  ->array has been redefined as object bcz JS doesn't support array with named indexes
                                whilst objects are named indexes in JS*/


/* Objects vs array -> arrays are numbered indexes
                       objects are named indexes*/


//new Array
const numbers=[10,20]
const newnumbers=new Array(10,20,30) //creates array with three elements
const unusualArray=new Array(10) //unlike above, doesn't create array with one element, creates array with 10 undefined elements
console.log(unusualArray);    //10 undefined elements array- empty array
console.log(unusualArray[0]); //undefined


//recognize array -> type of operator return object in case of array as array is special type of object
console.log(Array.isArray(students)); //true
console.log(students instanceof Array); //true
console.log(students instanceof Object); //true -> arrays are special objects



//-----------------------------------------Array Methods.......................................................

//----------------toString()-->converts array to String--------------------------
console.log(students.toString());  //returned string
console.log(students.toString().length);  //39 returned not array elements count but length of string bcz array was converted to string


//----------------at()-->returns value at index-------------------------
console.log(students);//Aleena,Amna,Areeba,Kalsoom,Zahra, ,Atiqa
console.log(students.at(2)); //Areeba
console.log(students.at(-1)); //Atiqa -->last element
console.log(students.at(-3)); //zahra -->counting from last with last element index as -1


//---------------join()-->converts to string, can specify seperator-------------
console.log(students.join()); //Aleena,Amna,Areeba,Kalsoom,Zahra,,Atiqa
console.log(students.join("+")); //+ is used as seperator--->Aleena+Amna+Areeba+Kalsoom+Zahra++Atiqa


//push(value) adds value to last of array
students.push("Masooma");
console.log(students);  // ['Aleena', 'Amna', 'Areeba', 'Kalsoom', 'Zahra', …, 'Atiqa', 'Masooma']


//pop()->removes last element
students.pop();
students.pop();
console.log(students.pop()); //pop doesn't return the removed element
console.log(students); //['Aleena', 'Amna', 'Areeba', 'Kalsoom', 'Zahra']


//shift()--->equivalent to pop() but working on first element instead of last
//shifts all other elements to lower indexes
//shift returns the removed element
console.log(students.shift()); //aleena ---removed element returened
console.log(students);  //['Amna', 'Areeba', 'Kalsoom', 'Zahra']


//unshift(value)--->add new element to  begining of array, 
//unshifts the older elements, shifting(higher to lower indexes), unshifting(lower to higher indexes)
//unshift method returns the new array length
console.log(students.unshift("Rubab"));  //5 -->returns new array length
console.log(students); //['Rubab', 'Amna', 'Areeba', 'Kalsoom', 'Zahra']


//delete(value)-->deletes element, leaves undefined holes
delete students[2];
console.log(students); //['Rubab', 'Amna', …, 'Kalsoom', 'Zahra']-->element at 2 removed leaving a undefined hole


//concat()-->merges arrays
//creates a new array
//can take any number of arguments (even numbers, strings or arrays)
console.log(students.concat(numbers)); //['Rubab', 'Amna', …, 'Kalsoom', 'Zahra', 10, 20]
console.log(students); //['Rubab', 'Amna', …, 'Kalsoom', 'Zahra'] -->concatenation didn't alter the original array, instead created a new array
console.log(students.concat(9)); // ['Rubab', 'Amna', …, 'Kalsoom', 'Zahra', 9]
console.log(students.concat("Maleehas")); //['Rubab', 'Amna', …, 'Kalsoom', 'Zahra', 'Maleehas']
console.log(students.concat("Maleehas",numbers)); //['Rubab', 'Amna', …, 'Kalsoom', 'Zahra', 'Maleehas', 10, 20]


//flat()--->creates a new array with sub-arrayes concatenated
//creates a new array 
const no=[3,4,[3,4,5,[6,7,8,[9,1,2]],[1,2,3,[3,4]]]];
console.log(no.flat()); //[3, 4, 3, 4, 5, Array(4), Array(4)]-->concatenated sub-arrays to depths 1
console.log(no.flat(2));//[3, 4, 3, 4, 5, 6, 7, 8, Array(3), 1, 2, 3, Array(2)]--> depth 2
console.log(no.flat(3));//[3, 4, 3, 4, 5, 6, 7, 8, 9, 1, 2, 1, 2, 3, 3, 4]
console.log(no.flat(Infinity)); // [3, 4, 3, 4, 5, 6, 7, 8, 9, 1, 2, 1, 2, 3, 3, 4]


//copyWithin() --> shallow copies part of an array to another location in the same array
//array: ['Rubab', 'Amna', …, 'Kalsoom', 'Zahra']
//Copy to index 0 all elements from index 2 to the end-- shallow copy(original array change)
console.log(students.copyWithin(0,2)); //[…, 'Kalsoom', 'Zahra', 'Kalsoom', 'Zahra']

//array: […, 'Kalsoom', 'Zahra', 'Kalsoom', 'Zahra']
////Copy to index 1 all elements from index 2 to the end
console.log(students.copyWithin(1,2)); // […, 'Zahra', 'Kalsoom', 'Zahra', 'Zahra']

//copy to index 0 the element at index 2 ( upto 3, 3 not included.   )
console.log(students.copyWithin(0,2,3));  ['Kalsoom', 'Zahra', 'Kalsoom', 'Zahra', 'Zahra']

//copy to index 0 element of index 2 upto 4 (4 not included)
console.log(students.copyWithin(0,2,4));


//slice()--->extracts part of an array into a new array
//does not include ending position
//original array doesn't change

//array:['Kalsoom', 'Zahra', 'Kalsoom', 'Zahra', 'Zahra']
console.log(students.slice(2,4)); //['Kalsoom', 'Zahra'] extracted from positions 2 upto 4 , 4 not included
console.log(students.slice(1)); //['Zahra', 'Kalsoom', 'Zahra', 'Zahra'] extract all elements starting from position 1 
console.log(students); //students arrays stays as before slice ['Kalsoom', 'Zahra', 'Kalsoom', 'Zahra', 'Zahra']


//splice()

//extracts part of string 
//includes last position
//original array changes

//array:['Kalsoom', 'Zahra', 'Kalsoom', 'Zahra', 'Zahra']
console.log(students.splice()); //empty array
console.log(students.splice(2,4)); //extracts from position 2 upto 4, 4 included -->['Kalsoom', 'Zahra', 'Zahra']
console.log(students); //['Kalsoom', 'Zahra'] extracted part is removed from the original array

//splice to add values to array
//array:['Kalsoom', 'Zahra'] 
//adds strings into array, continuing from position 1 , 0 indicates not deleting any element
students.splice(1,0,"Areeba", "Aleena", "zainab");
console.log(students);      // ['Kalsoom', 'Areeba', 'Aleena', 'zainab', 'Zahra']

//array:['Kalsoom', 'Areeba', 'Aleena', 'zainab', 'Zahra']
//continue from position 1, remove elements upto position 3(including 3), and add given elements there
students.splice(1,3,"Malaika", "Fatima", "Tayaba")
console.log(students); //['Kalsoom', 'Malaika', 'Fatima', 'Tayaba', 'Zahra']


//toSpliced()---->returns string without extracted part
//different with splice in a way that it doesn't alter original array
console.log(students.toSpliced(1,2)); ['Kalsoom', 'Tayaba', 'Zahra']
console.log(students);     //original array remained unchanged









