
const mobile ={
    brand:'samsung',
    price:25000,
    color:'black',
    camera:'12mpx'

}

for( const prop in mobile){

    console.log(prop);
    console.log(mobile[prop])
}


// for of-> array er moddhe cholbe
// for in->object er moddhe cholbe


const keys =Object.keys(mobile);
console.log(keys);



