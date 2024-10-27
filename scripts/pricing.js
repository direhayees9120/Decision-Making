// Ticketing Pricing 

function getTicketPrice(age) {
    if (age <= 12) {
        return "$10";
    } else if (age >= 13 && age <= 17) {
        return "$15";
    } else if (age >= 18) {
        return "$20";
    } else {
        return "Invalid age";
    }
}

console.log(getTicketPrice(10)); // $10
console.log(getTicketPrice(15)); // $15
console.log(getTicketPrice(25)); // $20
console.log(getTicketPrice(30)); // Invalid age