const phones = [
    {name : 'samsung', camera : 12, storage : '32gb', price : 360000},
    {name : 'Iphone', camera : 12, storage : '132gb', price : 1360000},
    {name : 'xaomi', camera : 12, storage : '12gb', price : 30000},
    {name : 'Poco', camera : 12, storage : '22gb', price : 16000},
    {name : 'htc', camera : 12, storage : '12gb', price : 60000},
    {name : 'vivo', camera : 12, storage : '4gb', price : 10300},
    {name : 'symphone', camera : 12, storage : '32gb', price : 8000},

];

function cheapestPhone(phones){
let cheapest = phones[0];
    for(let i = 0; i < phones.length; i++){
        const phone = phones[i];
         if (phone.price < cheapest.price){
            cheapest = phone;
         }
    }
    return cheapest;
}

const mySelection = cheapestPhone(phones);
console.log(mySelection); 