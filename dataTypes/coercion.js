let a = 5
let x = 6
let b = "8"
let y = "9"
let c = true
let z = false

console.table([a+b,a-b,a*b,a/b,a+c,a-c,a*c,a/c,b+c,b-c,b*c,b/c,a/z])
console.table([a+NaN,a+undefined,b+NaN,b+undefined,c+NaN,c+undefined])
console.table([a*NaN,a/NaN,b*NaN,b/NaN,c*NaN,c/NaN])

console.log([1, 2] - 3);