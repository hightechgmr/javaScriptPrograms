console.log(`
     Press 1 for celcius to kelvin
     Press 2 for celcius to fahrenheit
     Press 3 for kelvin to fahrenheit
     press same keys with negative value for inverse conversion
     `)

const readline = require('readline');
const unitChoice = readline.createInterface({ input: process.stdin, output: process.stdout });

unitChoice.question('Select: ', (name) => {
    unitChoice.close();
});   

switch(unitChoice){
     case 1:
          celToKel();
          break
     case 2:
          celToFah();
          break
     case 3:
          keltoFah();
          break
     case -1:
          kelToCel();
          break
     case -2:
          fahToCel();
          break
     case -3:
          fahToKel();
          break
     default:
          console.log("Invalid Input")
}