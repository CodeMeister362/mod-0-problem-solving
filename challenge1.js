//For each challenge you complete, 
//include comments showing the **overall goal** 
//in your own words, your **pseudocode**, and 
//your **final solution**. 

//Given an array of strings, return only 
//the strings that have exactly 4 characters.

// Goal - we will want loop through an array of stings
// and return only those with 4 characters

// pseudocode - create a variable, name it and then populate an array with strings. 
// These strings will have less than, more than or exactly 4 characters.
// Then find a method that filters only 4 characters.

var names = ["scott", "nate", "johnathan", "stan","ice"]

    for (var i = 0; i < names.length; i++){
        if (names[i].length === 4){
    console.log(names[i])
        }
    }