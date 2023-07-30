function  ticketPrice(ticketQuantity){
    const first100Rate = 100;
    const scnd100Rate = 90;
    restTicket = 70;
    if (ticketQuantity <= 100){
        const price = ticketQuantity * first100Rate; 
        return price       
    }

else if( ticketQuantity <=200){
    const first100Price = 100 * first100Rate;
    const restTicketQuantity = ticketQuantity - 100;
    const restTicketprice = restTicketQuantity * scnd100Rate;
    const totalPrice = first100Price + restTicketprice;
    return totalPrice;
}

else{
    const first100Price = 100 * first100Rate;
    const scnd100Price = 100 * scnd100Rate;
    restTicketQuantity = ticketQuantity - 200;
    restTicketprice = restTicketQuantity * restTicket;
    const totalCost = first100Price + scnd100Price + restTicketprice;
    return totalCost;
    

}
}
const price = ticketPrice(138);
console.log( price);
