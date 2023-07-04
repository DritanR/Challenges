/* Find the most common letter (not space) in the string(always lowercase and 2 < words) and replace it with the letter.

If such letters are two or more, choose the one that appears in the string( earlier.

For example:

('my mom loves me as never did', 't') => 'ty tot loves te as never did'
('real talk bro', 'n') => 'neal talk bno'
('great job go ahead', 'k') => 'grekt job go khekd' */

function replaceCommon(string, letter) {
  let obj = {}
  let arr = []
  const sortedArr = []
  string.split('').filter(el => el !== ' ').forEach(el => {
    obj[el] = obj[el] ? obj[el] + 1 : 1
  })
  
  for(let key in obj){
    if (obj[key] >= 2){
      arr.push(obj[key])
    }
  }
  
  let max = Math.max(...arr)
  
  for(let key in obj){
     if(obj[key] === max){
      sortedArr.push(key)
    }
  }
  
 const changedLetter = sortedArr[0]
  
  
 return string.split('').map(el => el.replace(changedLetter, letter)).join('')
}
