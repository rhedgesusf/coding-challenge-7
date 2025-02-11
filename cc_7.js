//////////////////////////////////
// Task 1: Function Declaration //
//////////////////////////////////

console.log("--------------------------------------");
console.log("Task 1: Function Declaration");

function calculateInvoice(subtotal, taxRate, discount) {
    let total = (subtotal + (subtotal * taxRate)) - discount;
    console.log(`Total Invoice: $${total.toFixed(2)}`);
}

calculateInvoice(100, .08, 5);
calculateInvoice(500, .1, 20);

/////////////////////////////////
// Task 2: Function Expression //
/////////////////////////////////

console.log("--------------------------------------");
console.log("Task 2: Function Expression");

const calculateHourlyWage = function(salary, hoursPerWeek) {
    let hourlyWage = salary / (hoursPerWeek * 52);
    console.log(`Hourly Wage: $${hourlyWage.toFixed(2)}`)
}

calculateHourlyWage(52000, 40);
calculateHourlyWage(75000, 35);

////////////////////////////
// Task 3: Arrow Function //
////////////////////////////

console.log("--------------------------------------");
console.log("Task 3: Arrow Function");

const calculateLoyaltyDiscount = (amount, years) => {
    let discount = 0;
    if (years >= 5) {
        discount = .15;
    }
    else if (years >= 3) {
        discount = .10;
    }
    else {
        discount = .05;
    }
    let price = amount - (amount * discount);
    console.log(`Discounted Price:  $${price.toFixed(2)}`);
};

calculateLoyaltyDiscount(100, 6);
calculateLoyaltyDiscount(200, 2);


