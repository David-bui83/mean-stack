/**
 * Create a function called fizzbuzz that accepts a parameter n. Have the function log all the numbers form 1
 * to n in order witht he following exceptions:
 * if the number is divisible by both 3 and 5, log "FizzBuzz" instead of the number
 * if the number is divisible by 3 but not 5, log "Fizz" instead of the number
 * if the number is divisible by 5 but not 3, log "Buzz" instead of the number
 * 
 */

function fizzbuzz(num){
  if (num < 0 || isNaN(num)){
    return 'Parameter must be a positive number'
  }else{
    var output;
    for (var i = 1; i <= num; i++){
      if (i % 3 == 0 && i % 5 == 0){
        output += 'FizzBuzz, ';
      }else if(i % 3 == 0 && i % 5 != 0){
        output += 'Fizz, ';
      }else if (i % 3 != 0 && i % 5 == 0){
        output += 'Buzz, ';
      }else{
        output += i +', '
      }
    }
  }
  return output;
}

console.log(fizzbuzz(-1));
console.log(fizzbuzz('fifteen'));
console.log(fizzbuzz(15));