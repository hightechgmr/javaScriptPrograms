// {
//      let a = 20;
//      const b = 30;
//      var c = 40;
//      d = 50;
// }

// console.log(c)
// console.log(d)
// console.log(b)
// console.log(a)

// function one(){
//      function two(){
//           var b = "two"
//           // console.log(a)
//      }
//      let a = "one"
//      console.log(b)
//      two()
// }

// one()

// {
//      x = 5;  
//      y = 6;  
// }
// z = x + y;
// console.log(z);

function makeCounter() {
  let count = 0; // Local variable
  
  return function() {
    count++;     // Inner function accesses 'count'
    return count;
  };
}

const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2 (Remembers previous value)