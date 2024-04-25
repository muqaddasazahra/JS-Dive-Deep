//Date() constructor with empty parameters
const date= new Date(); //returns current date and time at the time of instantiation
console.log(date); //Thu Apr 25 2024 13:22:26 GMT+0500 (Pakistan Standard Time) 


//Date(value) //value is time in miliseconds since the day January 1, 1970
const date1=new Date(2667756420000) 
console.log(date1); //Thu Jul 16 2054 00:27:00 GMT+0500 (Pakistan Standard Time)


//Date(DateTimeString)
const date2=new Date("2024-04-25 1:30")
console.log(date2); //Thu Apr 25 2024 01:30:00 GMT+0500 (Pakistan Standard Time)


/*new Date(year, monthIndex)
new Date(year, monthIndex, day)
new Date(year, monthIndex, day, hours)
new Date(year, monthIndex, day, hours, minutes)
new Date(year, monthIndex, day, hours, minutes, seconds)
new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds)*/

//Date(year,monthIndex, day, hour, minutes)
const date3=new Date(2024,4,25,1,30) 
console.log(date3); //Sat May 25 2024 01:30:00 GMT+0500 (Pakistan Standard Time)


//------------------------------Date Methods------------------------------------------
console.log("............................");
console.log(date);   //Thu Apr 25 2024 13:55:13 GMT+0500 (Pakistan Standard Time)
console.log(date.getDate()); //25
console.log(date.getDay()); //4 starting from 0 as Sunday
console.log(date.getMonth()); //3 starting from 0 as January
console.log(date.getFullYear()); //2024 starting from 0 as Sunday
console.log(date.getHours()); //13
console.log(date.getMinutes()); //55
console.log(date.getSeconds()); //13


console.log(".....................");
const myDate=new Date("2001-01-11 5:12");
console.log(myDate); //Thu Jan 11 2001 05:12:00 GMT+0500 (Pakistan Standard Time)
console.log(myDate.toLocaleString("en-US", 
{
    weekday: "long",  //long,short,narrow
    hour12:true,      //true or false
    month:"long",     //numeric(1), 2-digit(01), long(January), short(Jan), narrow(J)
    day:"numeric",     //numeric, 2-digit
    year:"numeric",     //numeric, 2-digit
 
})); //Thursday, January 11, 2001


const today=new Date(); 
console.log(typeof today);   //object
console.log(today.toString()); //Thu Apr 25 2024 14:33:22 GMT+0500 (Pakistan Standard Time)
console.log(today.toDateString()); //Thu Apr 25 2024 
console.log(today.toTimeString()); //14:34:18 GMT+0500 (Pakistan Standard Time)
console.log(today.toLocaleString()); //4/25/2024, 2:37:36 PM
console.log(today.toLocaleString("en-pk", { dateStyle:"long"}));  //25 April 2024
console.log(today.toLocaleString("en-pk", { dateStyle:"medium"}));  //25-April-2024
console.log(today.toLocaleString("en-pk", { dateStyle:"short"}));  //25/04/2024
console.log(today.toLocaleString("en-pk", { dateStyle:"full"}));  //Thursday, 25 April 2024
