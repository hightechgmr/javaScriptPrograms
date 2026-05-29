// function test(args,...remaining){
//      let sum = 0;
//      for (let i in remaining){
//           sum = sum + remaining[i]
//      }
//      return sum+args
// }
// console.log(test(1,2,3,4,5,6,7,8,9,10))

function test(){
     let sum = 0;
     for (let i in arguments){
          sum = sum + arguments[i]
     }
     return sum
}
console.log(test(1,2,3,4,5,6,7,8,9,10))