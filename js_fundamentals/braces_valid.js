/**
 * Given a string, write a function that will determine whether the braces - including, parentheses ()
 * square brackets [], and curly brackets - within the string are valid. That means that any braces within
 * other braces must close before the outer set closes. 
 * HINT: keep in mind that you may use arrays and objects to keep your information organized!
 * Example: bracesValid("{{()}}[]") returns true because the inner braces clase before the outer braces. Each
 * opening brace has a matching closing brace.
 * Example: bracesValid("{(})") return false because the curly braces close before the parentheses, which 
 * starts within the curly braces, has a chance to close.
 */

function bracesVAlid(str){
  let match, char
  let arr = []

  let open = ['[', '{', '(']
  let close = [']', '}', ')']

  for (let i = 0; i < str.length; i++) {
    char = str[i]

    if (close.indexOf(char) > -1) {
      match = open[close.indexOf(char)]
      if (arr.length == 0 || (arr.pop() != match)) {
        return false
      }
    } else {
      arr.push(char)
    }
  }

  return (arr.length == 0)
}
console.log(bracesVAlid('{{()}}[]'))
console.log(bracesVAlid('{(})'))


