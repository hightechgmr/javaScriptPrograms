/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
     let len = nums.length
     let lower = 0
     let upper = len - 1

     let recBinary = function(min,max,aim = target){
          let mid = Math.floor((min + max) / 2)
          
          if(mid === min ||  mid == max){
               if(aim === nums[mid]){
                    return mid
               }
               
               else{
                    if(aim < nums[mid]){
                         return mid
                    }
                    else{
                         if(aim === nums[mid+1]){
                              return mid + 1
                         }
                         else if(aim > nums[mid+1]){
                              return mid + 2
                         }
                         else{
                              return mid + 1
                         }
                    }
               }
          }
          if(aim === nums[mid]){
               return mid
          }
          else if(aim > nums[mid]){
               return recBinary(mid + 1, max)
          }
          else{
               return recBinary(min, mid - 1)
          }
     }
     
     return recBinary(lower,upper)
};

let arg1 = [1,3,5,6];
let target = 7;
console.log(searchInsert(arg1,target))