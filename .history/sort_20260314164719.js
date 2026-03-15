

const persons=['rakib','nokib','sakib','akib','dakib'];

const sortedPersons= persons.sort();
console.log(sortedPersons);



const numbers=[4.7,2,8,3,6,12,48,1];

// Ascending --->smaller to larger
//descending---> larger to smaller


// sort prothome 1st character ke sort korbe erpor bakika
const numbers_asc = numbers.sort();
console.log(numbers_asc)//[
 //   1, 12, 2, 3,
 // 4.7, 48, 6, 8
//]

const numbers_asc1=numbers.sort(function(a,b){return a-b});
console.log(numbers_asc