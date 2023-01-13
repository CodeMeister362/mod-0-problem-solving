//1. Given an array of strings, 
//return only the words that begin with the letter "t".

//Goal - evaluate multiple strings and print only those beginning with "t"

// psuedocode - create a loop that goes through an array of strings
// and evaluates each element and if the word begins in "t" then return that word.
// this will be done using a method. 

var words = ["limbo", "popcorn", "trumpet", "trains", "dogs","seattle"]

for ( var i = 0; i < words.length; i++){
    if ( words[i].startsWith("t")){
        console.log(words[i])
    }
}