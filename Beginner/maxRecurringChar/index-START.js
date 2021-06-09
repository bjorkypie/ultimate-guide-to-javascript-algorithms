/* CHALLENGE
Given a string of text, find and return the most recurring character. 
e.g maxRecurringChar('aabacada') // will return 'a'
*/


function maxRecurringChar(text) {
    //MAP THE CHARACTERS OF INPUT
    let charMap = {};

    for(let char of text) {
        if (charMap.hasOwnProperty(char)) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    }

    /* ITERATE <-- this is the fastest solution
    
    let maxRecurringValue = 0;
    let maxRecurringChar = '';
    for(let letter in charMap){
        if(charMap[letter] > maxRecurringValue){
            maxRecurringChar = letter;
            maxRecurringValue = charMap[letter];

        }
    }
    return maxRecurringChar
    */

    /* ARRAY */
    let charArray = [];
    let valuesArray = [];
    let maxCharValue = 0;

    charArray = Object.keys(charMap);
    valuesArray = Object.values(charMap);
    maxCharValue = Math.max(...valuesArray)

    return charArray[valuesArray.indexOf(maxCharValue)];
}



module.exports = maxRecurringChar;