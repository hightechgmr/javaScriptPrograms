const person = {
     name: "Harshit",
	course: "Bachelor of Computer Applications",
	university: "Kumaun University",
	percentage: 80,
	
}

// console.table(Object.keys(person))
// console.log(Object.keys(person).length)
// console.log(Object.values(person).length)

Object.freeze(person)
// Object.seal(person)
console.table(Object.values(person))
person.percentage = false
console.table(Object.values(person))