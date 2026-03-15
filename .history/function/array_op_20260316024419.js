/**
 * Objective: write a function to return sum of all numbers in array
 */

function sumOfNumbers(numbers){
    
    let sum=0;
    for(const num of numbers){
        console.log(num);
        sum=sum+num;
    }
    return sum;


}

const nums=[54,62,12,6];

const sum=sumOfNumbers(nums);
console.log('Sum of numbers:',sum);