// let person = {
//      firstName: "Harshit",
//      lastName: "Pathak",
//      course: "Bachelor of Computer Applications",
//      university: "Kumaun University",
//      percentage: 80,
//      isPassed: false
// }

// let {firstName, lastName, course: degree, university, percentage, age = 20} = person
// console.table(
//      [firstName,lastName,degree,university, percentage, age]
// )

// let firstName = "Harshit"

// let [a1, , a3, ...rest] = firstName

// console.log(
//      a1, a3, rest
// )

let personArray = ["Harshit", "Pathak", "Bachelor of Computer Applications", "Kumaun University", 80, false]

let [el1,, el2] = personArray
let {[3]:el3, [2]:el4, ...rest} = personArray

console.log(el1, el2)
console.log(el3, el4, rest)