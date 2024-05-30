/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count = 0;
    let element = null
    for(let num of nums){
        if(count===0){
            element =num
        }
        count += (num===element)? 1:-1;
    }
    return element
    
};