
const numbers=[1,2,3,4,5,6,7]


// // numbers.reverse();
// // console.log(numbers)


// // const reversed =numbers.reverse();
// // console.log(reversed);


// const rev_numbers=[];

// for(const num of numbers){
//     console.log(num);
//     // evabe push korle pison theke push hoi, tay same result ashe

//     rev_numbers.push(numbers);

//     // unshift diye push korle samne diye push hoi, reverse result ashe

//     rev_numbers.unshift(num)
// }

// console.log(rev_numbers)



console.log('<-----loop diye reverse---->');

const reversed_numbers=[];
for(let i=0;i<numbers.length;i++){
   const num= numbers[i];
   reversed_numbers.unshift(num);
}
console.log(reversed_numbers);



// reverse side

for(let i=numbers.length-1;i)