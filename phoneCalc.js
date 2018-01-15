/* * Write a program to calculate the total price of your phone purchase. You will keep purchasing phones (hint: loop!) until you run out of money in your bank account. You'll also buy accessories for each phone as long as your purchase amount is below your mental spending threshold.
* After you've calculated your purchase amount, add in the tax, then print out the calculated purchase amount, properly formatted.
* Finally, check the amount against your bank account balance to see if you can afford it or not.
* You should set up some constants for the "tax rate," "phone price," "accessory price," and "spending threshold," as well as a variable for your "bank account balance.""
* You should define functions for calculating the tax and for formatting the price with a "$" and rounding to two decimal places.
* **Bonus Challenge:** Try to incorporate input into this program, perhaps with the `prompt(..)` covered in "Input" earlier. You may prompt the user for their bank account balance, for example. Have fun and be creative! */

const ACCESSORY_AMOUNT = 9.99;
const TAX_RATE = 0.09;
const THRESHOLD = 120;
const PHONE_PRICE = 99.99;

var account_balance = 500;

//Add tax to total spend
function calcTax(amount) {
    amount = amount + (amount * TAX_RATE);

    return amount;
}

//calculate total spend inclusive of tax
function totalPrice() {
    var amount = PHONE_PRICE + ACCESSORY_AMOUNT; 

    if (amount < THRESHOLD) {
        amount = calcTax(amount);
    } else {
        amount = calcTax(PHONE_PRICE);
    }

    return amount;
}

//Format the values
function formatPrice(amount) {
    return "$" + amount.toFixed( 2 );
}

function buyPhone() {
    if (totalPrice() < account_balance) {
        console.log(`I bought my phone for ${formatPrice(totalPrice())}. \n`);
    
        account_balance = account_balance - totalPrice();
    
        console.log(`My new account balance is ${formatPrice(account_balance)}.`)
    } else {
        console.log(`I can't afford a new phone, it costs ${formatPrice(PHONE_PRICE)} and my account balance is ${formatPrice(account_balance)}.`)
    }
}

buyPhone();
