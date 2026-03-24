/*
  first100--->100
  101To200--->90
  above200--->70
*/

function layerDiscountTotal(quantity){
    const first100Price=100;
    const second100Price=90;
    const above200Price =70;



    if(quantity<=100){
        const total= quantity * first100Price;
        return total;
    }
    else if(quantity)
}