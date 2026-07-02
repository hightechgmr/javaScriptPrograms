let str = "a"
str = str.trimEnd()

let len = str.length
let count = 0

for(let i = len-1 ; (str.charCodeAt(i) != 32) && (i >= 0) ; i--){
     count++
}

console.log(count);