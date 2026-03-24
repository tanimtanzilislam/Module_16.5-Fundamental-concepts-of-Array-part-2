/*
function takes an array as parameter
give me the avg of the odd numbers in the array
*/


function oddAverage(numbers){
    const odd=[];
 for(const number of numbers){
    if(number%2==1){
        console.log(number);
    }
 }
   let sum=0;
  for (const num of odds){
    sum += num;
  }

  const count= odds.length;
  const avg=sum/count;
  return avg;
}

const numbers =[42,13,58,65,81,7]
const avg =oddAverage(numbers);
console.log('Average of the odd num',avg);