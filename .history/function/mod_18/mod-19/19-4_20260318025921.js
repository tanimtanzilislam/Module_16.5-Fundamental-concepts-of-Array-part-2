// 19-4 Find the cheapest phone from an array of phone objects

const prices=[20000,16000,50000,100000,120000,300000]


function getMin(numbers){
    let min=numbers[0];
    for( const num of numbers){
        if(num<min){
            min=num;
        }
    }
    return min;
}

const cheap =getMin(prices);


