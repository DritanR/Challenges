/* The Math.min function has stopped working, so we have to use our own function. We are off to a good start, but this function doesn't seem to handle everything properly. Add in the proper checks to return NaN for anything that isn't an actual number, except treat null like 0.

Note: This min function need not handle more than two arguments.

function min(a, b){
  return (a<b)?a:b;
} */

function min(a,b){
    if ((a === undefined)||(b === undefined)){
      return NaN;
    } else if (a === null){
      return b < 0 ? b : 0;
    } else if (b === null){
      return a < 0 ? a : 0;
    } else if ((isNaN(a))||(isNaN(b))){
      return NaN; 
    } else{
      return a < b ? a : b;
    };
  }