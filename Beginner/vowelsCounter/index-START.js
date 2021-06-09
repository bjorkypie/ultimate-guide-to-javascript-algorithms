/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/

const vowels = ['a', 'e', 'i', 'o', 'u'];

function vowelsCounter(text) {
/* ITERATIVE SOLUTION */
    /*
    let vowelNum = 0;
    for(let letter of text.toLowerCase()){
        if (vowels.includes(letter)){
            vowelNum++;
        }
    }
    return vowelNum
    */
    /* REGEX SOLUTION */
    let matchingInstances = text.match(/[aeiou]/gi);
    if(matchingInstances){
        return matchingInstances.length
    }else{
        return 0;
    }

}



module.exports = vowelsCounter;
