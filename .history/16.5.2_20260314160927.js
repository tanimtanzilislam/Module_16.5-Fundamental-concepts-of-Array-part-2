
const numbers=[1,2,3,4,5,6,7]


// numbers.reverse();
// console.log(numbers)


// const reversed =numbers.reverse();
// console.log(reversed);


const rev_numbers=[];

for(const num of numbers){
    console.log(num);
    // evabe push korle pison theke push hoi, tay same 
    rev_numbers.push(numbers);
}

console.log(rev_numbers)