// Write a function that counts the number of vowels in a string
// Examples:
//     1. "hello" shall return2 vowels
//     2. "Kigali" shall return3 vowels
//     3. "Airport" shall return 3 vowels
//     4. "Hhhh" shall return 4 vowels


function countVowels(vowel){
    let count = 0;
    var vowels =["a","i","u","o","e"];
    var lowercase = vowel.toLowerCase();
    for(i=0; i<=vowel.length; i++){
        if(vowels.includes (lowercase[i])){
            count++;
        }
    }

    return count;

}console.log(countVowels("lo"));