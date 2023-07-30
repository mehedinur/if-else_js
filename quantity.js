const shoppingCart = [
    {pName: 'shoe', color: 'red', price: 4500 , quantity: 2},
    {pName: 'saare', color: 'red', price: 20000 , quantity: 4},
    {pName: 'gold', color: 'white', price: 3500000 , quantity: 3},
    {pName: 'hijaab', color: 'lal neel sobuj sada kalo yellow khoyri chocolate blue', price: 2100 , quantity: 7},
 ];

 function totalExpense(products){
    let sum = 0;
    for (let i = 0; i < products.length; i++){
        const product = products[i];
        const productTotal = product.price * product.quantity;
        sum = sum + productTotal;
    }
    return sum;
 }

 const total = totalExpense(shoppingCart);
 console.log('total expense today: ',  total);