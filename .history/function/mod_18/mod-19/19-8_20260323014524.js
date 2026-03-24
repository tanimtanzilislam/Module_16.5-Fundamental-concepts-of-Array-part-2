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
        return 'First name shuold be a string';
    }
    else if( typeof second !=='string'){
            return 'Second Name should be a string'
    }
    const full= first+ ' '+second;
    return full;
}


function getPrice(product){
    if(typeof product!=='object'){
        return 'Please provide an object'
    }
    console.log(typeof product)
    const price =product.price;
    return price;
}


const price = getPrice({name:'chulkanir Dandi',price:35,color:'blue'})
console.log(price)


function getSecond(numbers){
    const seco
}
const full= fullName('Akmal');
console.log(full);