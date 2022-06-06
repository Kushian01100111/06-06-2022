// #Find the missing letter

// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'

// ["a","b","c","d","f"] -> "e"
// ["O","Q","R","S"] -> "P"
// (Use the English alphabet with 26 letters!)

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have also created other katas. Take a look if you enjoyed this kata!
let Alphabet = {
    1: "a",
    2: "b",
    3: "c",
    4: "d",
    5: "e",
    6: "f",
    7: "g",
    8: "h",
    9: "i",
    10: "j",
    11: "k",
    12: "l",
    13: "m",
    14: "n",
    15: "o",
    16: "p",
    17: "q",
    18: "r",
    19: "s",
    20: "t",
    21: "u",
    22: "v",
    23: "w",
    24: "x",
    25: "y",
    26: "z",
  }
function findMissingLetter(array)
{
    let arr = array.map(n => n.toLowerCase()),
        number = [],
        obj = Object.entries(Alphabet);
  
 obj.forEach((n,index)=>{
   for(let i = 0 ; i < arr.length ; i++){
     if(n[1] === arr[i]){
       number.push(n[0])
     }
   }
 })
  let result = number.map(n => Number(n)),
      resultLetter = [];
  result.forEach((n,index)=>{
    if(n+1 !== result[index + 1] && resultLetter.length === 0){
      resultLetter.push(n+1)
    }
  });
  if(array[0] == array[0].toUpperCase()){
    return obj[resultLetter-1][1].toUpperCase();
  }else{
    return obj[resultLetter-1][1];
  }
}

