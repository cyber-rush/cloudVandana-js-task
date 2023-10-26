function sortArrayDescending(array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] < array[j]) {
                // Swap elements if they are in the wrong order
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
}

// Example usage
let numbers = [5, 2, 9, 1, 5, 6];
let sortedNumbers = sortArrayDescending(numbers);
console.log(sortedNumbers); // Output: [9, 6, 5, 5, 2, 1]
