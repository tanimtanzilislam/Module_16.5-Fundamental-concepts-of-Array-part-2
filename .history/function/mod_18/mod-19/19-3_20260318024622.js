// 19-3 Use add and multiplication to calculate wood requirements



function woodCalculator(chair,table,bed){
    const perChairWood=3;

    const perTableWood=10;

    const perBedWood=50;

    const chairTotalWood = chair *perChairWood;
     const tableTotalWood =table * perTableWood;
     const bedTotalWood =bed *perBedWood;
 const totalWood = chairTotalWood + tableTotalWood + bedTotalWood;
 return totalWood;
}