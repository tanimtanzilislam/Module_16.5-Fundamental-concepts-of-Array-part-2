

let a=5;
let b=7;


const temp=a;
a=b;
b=a;
console.log(a,b);


let x=5;
let y=7;

console.log(x,y);

[x,y]=[y,x];
console.log(x,y);


for (var i = 0; i < 5; i++) {
 	 setTimeout(function () {
 	console.log(i);
  }, 100);
}
