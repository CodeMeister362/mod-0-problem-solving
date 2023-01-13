//. Start with an array of strings with a mix of uppercase and 
//lowercase letters. Print every word in all lowercase letters.

//Goal - evaluate a string of various words and make them lowercase. 

//psuedocode - creat an array of strings with various words in uppercase 
//and lowercase. Create a loop that runs through the array 
//and changes all letters to lowercase via a method. 


var screenNames = ["natCHAMBO", "CodeMIESTER", "SlerpDurp", "BADMANSTAN"]

for (var i = 0; i < screenNames.length; i++){
    console.log(screenNames[i].toLowerCase());
}