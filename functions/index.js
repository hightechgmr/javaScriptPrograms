// let a,b;
// console.log(a+b);

function addNumbers(a,b){
     if((typeof a === "number") && (typeof b === "number")){
          console.log(a+b)
     }
     else{
          console.log("Please Input Number")
     }
}

// addNumbers(3,false)

// console.log(typeof 4 && typeof 8)

let x = addNumbers
x(2,3)