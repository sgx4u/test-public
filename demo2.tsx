// Simple Sorting Algorithm: Bubble Sort

function bubbleSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j + 1]
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

// Example usage:
const unsortedArray = [5, 3, 8, 4, 2];
console.log(bubbleSort(unsortedArray)); // Output: [2, 3, 4, 5, 8]