 const shoppingCart = [
    {pName: 'shoe', color: 'red', price: 4500 },
    {pName: 'saare', color: 'red', price: 20000},
    {pName: 'gold', color: 'white', price: 3500000},
    {pName: 'hijaab', color: 'lal neel sobuj sada kalo yellow khoyri chocolate blue', price: 2100},
 ]

 function totalExpense(products){
    let sum = 0;
    for (let i = 0; i < products.length; i++){
        const product = products[i];
        sum = sum + product.price;
    }
    return sum;
 }

 const total = totalExpense(shoppingCart);
 console.log('total expense today: ',  total);