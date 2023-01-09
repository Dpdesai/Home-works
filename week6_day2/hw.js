// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples

function anagrams(str1, str2) {
    str1 = str1.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    str2 = str2.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    if (str1.length !== str2.length) {
        return false;
    }

    const vector = new Array(26).fill(0);
    const vector2 = new Array(26).fill(0);
    
    for (let i = 0; i < str1.length; i++) {
        vector[str1[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    for (let i = 0; i < str2.length; i++) {
        vector2[str2[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    for (let i = 0; i < str1.length; i++) {
        if(vector[i] !== vector2[i]) {
            return false;
        }
    }
    return true;
}


// console.log(anagrams('rail safety', 'fairy tales')); //--> True
// console.log(anagrams('RAIL! SAFETY!', 'fairy tales')); //--> True
console.log(anagrams('Hi there', 'Bye there')); //--> False