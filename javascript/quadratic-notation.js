/*
Program explanation:
  For the Quadratic time Big O Notation function in this example, when the array is passed into the logAllPairs() function, the function is going to loop through each item in the array and print out all possible pairs of the given array. This is done by looping through the array twice, and printing out each item in the array with each item in the array. Causing the time complexity to be O(n^2) => Quadratic Time.

  Note: If a function loops through the array twice, it has a time complexity of O(n^2). In contrast, a function with constant time complexity only loops through the array once, resulting in a linear time complexity of O(n).

*/

const boxes = [1, 2, 3, 4, 5];

const logAllPairs = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    // O(n)
    for (let x = i + 1; x < arr.length; x++) {
      // O(n)
      console.log(`[${arr[i]} - ${arr[x]}]`);
    }
  }
};

logAllPairs(boxes); // O(n^2) => Quadratic Time
