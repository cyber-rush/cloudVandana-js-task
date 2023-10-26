function reverseWords(sentence) {
    let reversedSentence = '';
    let word = '';
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] !== ' ') {
            // Build the word in reverse
            word = sentence[i] + word;
        } else {
            // Add the reversed word and space to the reversed sentence
            reversedSentence += word + ' ';
            word = ''; // Reset the word for the next word
        }
    }
    // Add the last word to the reversed sentence
    reversedSentence += word;

    return reversedSentence;
}

// Example usage
let inputSentence = "This is a sunny day";
let reversedSentence = reverseWords(inputSentence);
console.log(reversedSentence); // Output: "sihT si a ynnus yad"
