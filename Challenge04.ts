/*

Ring, ring… 📞

Ghostface: "Hello, Sidney… I have a list of 1000 potential victims with their phone numbers. Your friend is somewhere on this list. Can you find them before it's too late?"

You're given a SORTED array of phone numbers (from lowest to highest) and you need to find a specific one as quickly as possible.

The problem: With 1000 numbers, searching one by one would be too slow. You need a smarter algorithm…

💻 The Challenge
Implement the function searchPhone(phones, target) using BINARY SEARCH

Inputs:

phones: Array of numbers sorted from lowest to highest (e.g., [1001, 1002, 1005, 1008, ...])
target: Phone number you're looking for
Output:

The index (position) where the number is found
-1 if it doesn't exist in the list
📝 Examples
const phones = [1001, 1002, 1005, 1008, 1010, 1015, 1020]

searchPhone(phones, 1008)
// → 3 (it's at index 3)

searchPhone(phones, 1001)
// → 0 (it's at index 0)

searchPhone(phones, 1020)
// → 6 (it's at index 6)

searchPhone(phones, 9999)
// → -1 (doesn't exist)
The advice…
You have no time to waste. You need to find the number as quickly as possible so Ghostface doesn't finish off his victim. That's why the best approach would be to use a Binary Search Algorithm:

Look at the middle element of the array
If it's the number you're looking for → you found it!
If the target is smaller → search in the left half
If the target is larger → search in the right half
Repeat until you find it or run out of elements
🧠 Algorithm Visualization
Let's search for the number 1008 in [1001, 1002, 1005, 1008, 1010, 1015, 1020]:

Step 1: Check the middle
[1001, 1002, 1005, |1008|, 1010, 1015, 1020]
                     ↑
Middle = index 3 → Found! Return 3
Let's search for the number 1015:

Step 1: Check the middle
[1001, 1002, 1005, |1008|, 1010, 1015, 1020]
                     ↑
1015 > 1008 → Search in the RIGHT half

Step 2: New range [1010, 1015, 1020]
[1010, |1015|, 1020]
        ↑
Middle = index 5 → Found! Return 5
Keep in mind that the list of numbers can be very long for a linear search.

*/

function searchPhone(phones: number[], target: number): number {
    let leftPointer = 0;
    let rightPointer = phones.length - 1;

    while (leftPointer <= rightPointer) {
        const middlePosition = Math.floor((leftPointer + rightPointer) / 2);

        if (phones[middlePosition] === target) {
            return middlePosition;
        } else if (target > phones[middlePosition]) {
            leftPointer = middlePosition + 1;
        } else {
            rightPointer = middlePosition - 1;
        }
    }
    return -1;
}

console.log(searchPhone([1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011], 1009));