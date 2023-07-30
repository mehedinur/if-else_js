// function furniture (chairQuantity, tableQuantity, bedQuantity){
//     const perChairWood = 5;
//     const perTableWood = 15;
//     const perBedWood = 55;
    
//     const chairWood = chairQuantity * perChairWood;
//     const tableWood = tableQuantity * perTableWood;
//     const bedWood = bedQuantity * perBedWood

// const totalWood = chairWood + tableWood + bedWood;


// return totalWood;
// }

// const totalWood = furniture(12, 2, 3);
// console.log('total wood required: ', totalWood);

function body (Hat, Chest, Paa){
    const hatHaddi = 28;
    const chestHaddi = 56;
    const paaHaddi = 13;

    const totalHat = Hat * hatHaddi;
    const totalChest = Chest * chestHaddi;
    const totalPaa = Paa * paaHaddi;

    const totalHaddi = totalHat + totalChest + totalPaa;
    return totalHaddi;
}

const totalHaddi = body(2, 1, 2);
console.log('total haddi in body: ', totalHaddi);


 