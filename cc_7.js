//////////////////////////////////
// Task 1: Function Declaration //
//////////////////////////////////

console.log("--------------------------------------");
console.log("Task 1: Function Declaration");

// create function to calculate invoice total amount
// inputs:
//  subtotal - the sub total amount in dollars before tax and discount
//  taxRate - the tax rate in decimal format
//  discount - the discount in dollars to be applied
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

// create function to calculate hourly wage
// inputs:
//  salary - yearly salary in dollars
//  hoursPerWeek - hours per week they are targeted to work
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

// create function to calculate loyalty dicount based on years being customer
// inputs:
//  amount - purchase amount in dollars
//  years - the years they have been customer
const calculateLoyaltyDiscount = (amount, years) => {
    let discount = 0;

    if (years >= 5) {
        discount = .15;  // apply 15% discount
    }
    else if (years >= 3) {
        discount = .10;  // apply 10% discount
    }
    else {
        discount = .05;  // apply 5% discount
    }

    let price = amount - (amount * discount);

    console.log(`Discounted Price:  $${price.toFixed(2)}`);
};

calculateLoyaltyDiscount(100, 6);
calculateLoyaltyDiscount(200, 2);

//////////////////////////////////////
// Task 4: Parameters and Arguments //
//////////////////////////////////////

console.log("--------------------------------------");
console.log("Task 4: Parameters and Arguments");

// create function to calculate shipping cost based on target location and expedited flag
// inputs:
//  weight - the weight of the package
//  location - the location (USA or Canada)
//  expedited - boolean flag if expedited shiping
function calculateShippingCost(weight, location, expedited = false) {
    let shippingFees = 0;

    if (location == "USA") {
        shippingFees = 5 + (.5 * weight);   // if USA, ship fee is $5 and .5 * weight
    }
    else if (location == "Canada") {
        shippingFees = 10 + (.7 * weight);   // if Canada, ship fee is $10 and .7 * weight
    }

    if (expedited === true) {
        shippingFees += 10;     // expedited shipping have $10 charge
    }

    console.log(`Shipping Cost: $${shippingFees.toFixed(2)}`)
}

calculateShippingCost(10, "USA", true);
calculateShippingCost(5 , "Canada", false);

//////////////////////////////
// Task 5: Returning Values //
//////////////////////////////

console.log("--------------------------------------");
console.log("Task 5: Returning Values");

// create function to calculate loan interest
// inputs:
//  principal - the principal amount of the loan
//  rate - the interest rate on the loan (decimal format)
//  years - the years of the loan
function calculateLoanInterest(principal, rate, years) {
    let interest = principal * rate * years;

    console.log(`Total Interest: $${interest.toFixed(2)}`);

    return interest; // returning value because instructions say "return total interest" though problem functions same without
}

calculateLoanInterest(1000, .05, 3);
calculateLoanInterest(5000, .07, 5);

////////////////////////////////////
// Task 6: Higher-Order Functions //
////////////////////////////////////

console.log("--------------------------------------");
console.log("Task 6: Higher-Order Functions");

// create function to filter out high value transactions from array given a filter function
// inputs:
//  transactions - an array of transactions
//  filterFunction - the function to filter out values
function filterHighValueTransactions(transactions, filterFunction) {
    let filteredTransactions = transactions.filter(filterFunction);
    console.log(`Filter Transactions: `, filteredTransactions)
}

let transactions = [500, 1200, 3000, 800, 2200];

filterHighValueTransactions(transactions, amount => amount > 1000);   // filter values greater than 1000


//////////////////////
// Task 7: Closures //
//////////////////////

console.log("--------------------------------------");
console.log("Task 7: Closures");

// create function to accumulate expense values. The function will return a function to be used to total expenses.
function createBudgetTracker() {
    let totalExpenses = 0;
    
    // function to accumulate expenses to a running total
    return function(expense) {
        totalExpenses -= expense;
        console.log(`Current Balance: $${totalExpenses}`);
    };
}

let budget = createBudgetTracker();
budget(300);
budget(200);

/////////////////////////////////////
// Task 8: Recursion in Javascript //
/////////////////////////////////////

console.log("--------------------------------------");
console.log("Task 8: Recursion in Javascript");

// create function to calculate revenue growth at 5% annual growth rate. Limit is 10 years
// inputs:
//  years - the current year mark
//  revenue - the current revenue amount
function calculateGrowth(years, revenue) {

    // process revenue growth rate up to 10 years
    if (years < 10)
    {
        return calculateGrowth(years + 1, revenue * 1.05);
    }
    return revenue.toFixed(2);
}

console.log(`Projected Revenue(8, 1000): $${calculateGrowth(8, 1000)}`);
console.log(`Projected Revenue(5, 5000): $${calculateGrowth(5, 5000)}`);