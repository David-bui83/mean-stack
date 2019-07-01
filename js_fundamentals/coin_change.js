/**
 * 
 * Given a number of US cents, return the optimal configuration (meaning the largest denominations possible)
 * of coins in an object. Use dollars, quaters, dimes, nickels, and pennies
 * 
 * Example: coinchange(312) returns
 * {dollar: 3, dimes: 1, pennies: 2}
 * 
 * Example: coinchange(78) returns
 * {quaters: 3, pennies: 3}
 * 
 * Bonus: Given an object with certain amounts of denominations of US money, alter the object so that 
 * the configuration is optimal.
 * 
 * Example: coinChange({dollars: 2, dimes: 15, pennies: 5}) returns
 * {dollars: 3, queaters: 2, nickels: 1}
 */

function ConvertObjectsToInt(amt){
  var amount = 0
  for( var key in amt){
    if (key == 'dollars'){
      amount += amt[key] * 100;
    }
    if (key == 'quarters'){
      amount += amt[key] * 25;
    }
    if (key == 'dimes'){
      amount += amt[key] * 10;
    }
    if (key == 'nickles'){
      amount += amt[key] * 5;
    }
    if (key == 'pennies'){
      amount += amt[key] * 1;
    }
  }
  return amount
}

function coinChange(amt){
  var amount = 0
  var money = {
    dollars: 0,
    quaters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0
  }

  if (typeof amt == 'object'){
    amount = ConvertObjectsToInt(amt)
  }else{
    amount = amt
  }

  money.dollars = Math.floor(amount / 100);
  change = amount % 100;
  money.quaters = Math.floor(change / 25);
  change = change % 25;
  money.dimes = Math.floor(change / 10);
  change = change % 10;
  money.nickels = Math.floor(change / 5);
  change = change % 5;
  money.pennies = Math.floor(change / 1);

  if (money.dollars == 0){
    delete money.dollars
  }
  if (money.quaters == 0){
    delete money.quaters
  }
  if (money.dimes == 0){
    delete money.dimes
  }
  if (money.nickels == 0){
    delete money.nickels
  }
  if (money.pennies == 0){
    delete money.pennies
  }

  return money 
}

console.log(coinChange(312))
console.log(coinChange(78))

console.log(coinChange({dollars: 2, dimes: 15, pennies: 5}))