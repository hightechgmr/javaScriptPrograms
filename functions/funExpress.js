// const name = function add(a, b) {return a + b;};

// console.log(name(2,4));


// const add = function add(a, b) {return a + b;};

// console.log(add(2,4));

// const add = function (a, b) {return a + b;}

// console.log(add(2,4))

function run(fn) {
  return fn();
}

const sayHello = function() {
  return "Hello";
};

console.log(run(sayHello))