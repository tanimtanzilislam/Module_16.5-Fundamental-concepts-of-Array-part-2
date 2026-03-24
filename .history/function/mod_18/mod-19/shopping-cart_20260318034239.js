const products=[
    {name:'chairuni',price:100,quantity:2},
    {name:'shirt',price:700,quantity:3},
    {name:'pant',price:1200,quantity:5},
    {name: 'shampoo',price:300,quantity:1},
]


function cartTotal(products){
    let total=0;
    for(const product of products){
        const thisItem
        total= total+ product.price
    }
    return total;
}

const shoppingCost =cartTotal(products);
console.log(shoppingCost)