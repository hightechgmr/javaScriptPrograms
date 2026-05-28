const fruits = ["Banana", "Orange", "Apple", "Mango"];  
let myList = fruits.toString();


const d = new Date();  
let text1 = d.toString();


let x = 123;  
let text2 = x.toString();


let y = 123;  
let text3 = y.toString(2);

console.table([myList,text1,text2,text3])

console.table([
String(x),      // returns a string from a number variable x  
String(123),    // returns a string from a number literal 123  
String(100+23),    // returns a string from a number from an expression 

String(false),  // returns "false"  
String(true)   // returns "true"
])
