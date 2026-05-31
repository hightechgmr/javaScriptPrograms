const array = ["a","b","c","d","e","f","a","e","a","j","b","d","a","b","c","d","e","f","a","e","a","j","b","d"];
let x = array.length
let uniArr = []

function fun(nonUni){
     for(let i = 0; i < x; i++){
          let curr = nonUni[i]
          if(uniArr.indexOf(curr) === -1){
               uniArr.push(curr)
          }
     }
}

fun(array)
console.log(uniArr);