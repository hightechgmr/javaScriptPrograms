// let add = (a,b) => {
//      return a+b
// }
// let multiply = (a,b) => (a*b)

// let divide = (a,b) => a/b

// console.table([add(1,2),multiply(1,2),divide(1,2)])

// const hello = () => "helloWorld"

// console.log(hello())

// const fun = x  => x**x
// console.log(fun(3))

// const person = {  
//      name: "John",  
//      greet: function() {  
//           return this.name;  
//      }  
// };  

// console.log(person.greet())

// const person = {
//   name: "John",
//   greet: () => {
//     return this.name;
//   }
// };

// console.log(person.greet())

function fun1(){
     return this
}

let fun2 = () => this

// console.log(fun1())
console.log(fun2())