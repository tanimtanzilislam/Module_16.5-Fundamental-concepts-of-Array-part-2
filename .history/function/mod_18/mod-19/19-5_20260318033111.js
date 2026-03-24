// Calculate the total cost of the products in a shopping cart

const products=[
    {name: 'shampoo',price:300},
    {name:'chairuni',price:100},
    {name:'shirt',price:700},
    {name:'pant',price:1200}
]


function getShoppingTotal(proucts){

 let total=0;
    for(const product of products){
        console.log(product);
        total += product.price;
    }


}

const total= getShoppingTotal(products);
console.log('Total ajke jabe',total)
