/* Pair of gloves
Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.

Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only gloves of the same color can form pairs.

Examples:
input = ["red", "green", "red", "blue", "blue"]
result = 2 (1 red pair + 1 blue pair)

input = ["red", "red", "red", "red", "red", "red"]
result = 3 (3 red pairs) */

function numberOfPairs(gloves)
{
 let pairs = 0;
  let colors = {};

  for (let i = 0; i < gloves.length; i++) {
    let color = gloves[i];

    if (colors[color]) {
      // If we've seen this color before, increment the count
      colors[color]++;
      // If we have an even number of gloves of this color, we can form a pair
      if (colors[color] % 2 === 0) {
        pairs++;
      }
    } else {
      // If we haven't seen this color before, start a new count
      colors[color] = 1;
    }
  }

  return pairs;
}