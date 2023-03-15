/* Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  "" */

// complete the function
function solution(string) {
  let arr = []
 for (let i of string) {
   if (i === i.toUpperCase()) {
     arr.push(i.replace(i,' ' + i))
   }else {
     arr.push(i)
   }
 }
  return arr.join('')
}
