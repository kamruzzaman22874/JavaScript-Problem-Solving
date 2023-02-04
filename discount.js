// first 100 ticket price - 100tk
// second 100 ticket price - 90tk
// third 100 up to any quantity price - 70tk

// function ticketPrice(ticketQuantity) {
//     const first100TicketRate = 100;
//     const second100TicketRate = 90;
//     const restTicketRate = 70;
//     if (ticketQuantity <= 100) {
//         price = ticketQuantity * first100TicketRate;
//         return price;
//     }
//     else if (ticketQuantity <= 200) {
//         const first100Price = 100 * first100TicketRate;
//         const second100Quantity = ticketQuantity - 100;
//         const second100Price = second100Quantity * second100TicketRate;
//         const totalSecond100Rate = first100Price + second100Price;
//         return totalSecond100Rate;
//     }
//     else {
//         const first100TicketPrice = 100 * first100TicketRate;
//         const second100TicketPrice = 100 * second100TicketRate;
//         const restTicketQuantity = ticketQuantity - 200;
//         const restTicketPrice = restTicketQuantity * restTicketRate;
//         const totalTicketCost = first100TicketPrice + second100TicketPrice + restTicketPrice;
//         return totalTicketCost;
//     }
// }
// const rate = ticketPrice(201)
// console.log(rate);


// first 100 ticket price - 100tk
// second 100 ticket price - 90tk
// third 100 up to any quantity price - 70tk


function ticketPrice(ticketQuantity) {
    const first100TicketPrice = 100;
    const second100TicketPrice = 90;
    const third100TicketPrice = 70;

    if (ticketQuantity < 100) {
        const firstTicketCost = ticketQuantity * first100TicketPrice;
        return firstTicketCost;
    }
    else if (ticketQuantity < 200) {
        const firstTicketAmount = 100 * first100TicketPrice;
        const secondTicketAmount = ticketQuantity - 100;
        const secondTicketCost = secondTicketAmount * second100TicketPrice;
        const totalSecondTicketCost = firstTicketAmount + secondTicketCost;
        return totalSecondTicketCost;
    }
    else {
        const firsTicket = first100TicketPrice * 100;
        const secondTicket = second100TicketPrice * 100;
        const thirdTicketAmount = ticketQuantity * third100TicketPrice;
        
        const totalAmount = firsTicket + secondTicket + thirdTicketAmount;
        return totalAmount;
    }

}
const ticketCost = ticketPrice(202);
console.log(ticketCost);


