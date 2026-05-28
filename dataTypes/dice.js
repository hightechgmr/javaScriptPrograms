let for1 = for2 = for3 = for4 = for5 = for6 = 0

 for(let i = 1; i <= 9999999; i++){
     let max = 6
     let min = 1
     let obtainedNumber = Math.floor((Math.random() * (max - min + 1)) + min)

     switch(obtainedNumber){
          case 1: for1++; break
          case 2: for2++; break
          case 3: for3++; break
          case 4: for4++; break
          case 5: for5++; break
          case 6: for6++; break
     }
}

let dieData = {
     1 : ((for1*100)/9999999).toFixed(4),
     2 : ((for2*100)/9999999).toFixed(4),
     3 : ((for3*100)/9999999).toFixed(4),
     4 : ((for4*100)/9999999).toFixed(4),
     5 : ((for5*100)/9999999).toFixed(4),
     6 : ((for6*100)/9999999).toFixed(4)
}

console.table(dieData)