var plusOne = function(digits) {
    digits.reverse()
    let len = digits.length
    for(let i = 0; i < (len); i++){
        if((i === 0) && (len != 1)){    
            if(!
                (digits[0] >= 9)
            ){
                digits[0] = digits[0] + 1
                digits.reverse()
                return digits
            }
            else{
                digits[0] = 0
                continue
            }
        }

        else if(i === len - 1){
            if(!
                (digits[i] >= 9)
            ){
                digits[i] = digits[i] + 1
                digits.reverse()
                return digits
            }
            else{
                digits[i] = 0
                digits.push(1)
                digits.reverse()
                return digits
            }
        }

        else{
            if(!
                (digits[i] >= 9)
            ){
                digits[i] = digits[i] + 1
                digits.reverse()
                return digits
            }
            else{
                digits[i] = 0
                continue
            }
        }
    }
};

console.log(plusOne([9]))