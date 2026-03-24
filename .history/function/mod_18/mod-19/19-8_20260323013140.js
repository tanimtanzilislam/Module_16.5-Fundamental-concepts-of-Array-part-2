function multiply(num1,num2){
    console.log(typeof num1! == 'number' || typeof num2 !=='number'){
         return 'Please provide a number'
    }
    const mult= num1 * num2;
    return mult;
}
const result= multiply(5,'seven');
// console.log(result);

function fullName(first,second){

    if(typeof first!=='string'){
        return 'Please provide a string';
    }
    const full= first+ ' '+second;
    return full;
}

const full= fullName(5,7);
console.log(full);