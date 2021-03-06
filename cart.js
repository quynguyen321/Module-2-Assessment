///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

function totalPrice(cart) {
    const summedPrice = cart.reduce(function (acc, elem) {
      return { price: acc.price + elem.price };
    });
  
    return summedPrice.price;
  }
  
  console.log(totalPrice(cart));

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
function calFinalPrice(cartTotal, couponValue, tax) {
    const logic = cartTotal * tax - couponValue;
    return logic;
  }
  
  console.log(calFinalPrice(totalPrice(cart), 2, 1.06));

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    cup- sometime customer want to have extra water of cup
    bow- when customer want to share food it alway need extra blow
    high chair- every framily have small kidd alway ned high chair
    spoon- some asian restaurant they only use chopstick it alway need the spoon for extra


*/
 
/*
    Now, create a customer object following your own
    guidelines.
    I will use array because list out all item i need
*/

//CODE HERE
const purchases = [`cup`, `bow`, `high chair`, `spoon` ]
