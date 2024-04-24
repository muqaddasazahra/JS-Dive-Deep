//round---------> rounds to nearest integer
console.log(Math.round(9.4)); //9
console.log(Math.round(9.6)); //10
console.log(Math.round(9.5)); //10

//ceil----> rounds up to nearest integer
console.log(Math.ceil(4.2)); //5
console.log(Math.ceil(3.1)); //4

//floor--> rounds down to nearest integer
console.log((Math.floor(4.2))); //4
console.log((Math.floor(3.9))); //3

//trunc--> returns the integer part
console.log(Math.trunc(4.2));    //4
console.log(Math.trunc(9.345));  //9

//sign ---> returns if number is +ve, -ve or zero
console.log(Math.sign(-4.334));  //-1-----ve
console.log(Math.sign(0.34));    //1 --+ve
console.log(Math.sign(0));    //0
console.log(Math.sign(-0));    //-0
console.log(Math.sign(null));    //0
console.log(Math.sign(undefined));    //NaN
console.log(Math.sign("abc"));    //NaN

//pow--> return value of x to the power of y
console.log(Math.pow(4,4)); //256
console.log(Math.pow(5,2)); //25

//sqrt-->return sqrt
console.log(Math.sqrt(256));  //15

//abs-->returns absolute (+ve value of x)
console.log(Math.abs(-53.45)); //53.45
console.log(Math.abs(-0.34)); //0.34
console.log(Math.abs(null)); //0
console.log(Math.abs(undefined)); //NaN

//min & max
console.log(Math.min(53, 0, 32, -21, 456, -32)); //-32
console.log(Math.max(53, 0, 32, -21, 456, -32)); //456

//random -->return a random number between 0&1 (0inclusive, 1exclusive)
console.log(Math.random()); //0.6568893857216438
console.log(Math.random().toFixed(2)); //0.07

console.log(Math.random()*10); /*Range 0 upto (but not including) 10
                                 moves one digit from right side of the decimal to the left, so the returned value is anything like 0.12 becomes 1.2
                                 0r 0.91 becomes 9.1
                                 0.01 becomes 0.1*/
console.log(Math.random()*10+1);  // +1 so that the case 0.01-->0.1 becomes 1.1 now . Done to avoid 0. if the required ranged is 1 to 10
console.log(Math.floor(Math.random()*10+1));  //after setting range 1-10 , just to get integer values 

console.log(Math.ceil(Math.random()*10));  /*as multiplying with 10 moves one digit from right of decimal to left which is any digit 0-9. 
                                             Math.ceil rounds up those value so 0.34->1,  1.34->2,  4.5->8,  9.9->10 
                                             this way we get the values 1-10*/

console.log(Math.random()*64); //Range 0 upto 63 (64 not including)

//range between 32 to 64  range Formula --> Math.random()*(max-min+1)+min
console.log(Math.random()*64); //Range 0 upto 63 (64 not including)
console.log(Math.random()*(64-32)); //64-32=32  Range 0 upto 31 (32 not included)
console.log(Math.random()*(64-32+1)); //previously, range was 0-31, adding 1 range becomes 0-32
console.log(Math.random()*(64-32+1)+32); //range was 0-32, adding 32 to each digit will give 32-64
console.log(Math.floor(Math.random()*(64-32+1)+32)); //rounding down to closest integer
                                          