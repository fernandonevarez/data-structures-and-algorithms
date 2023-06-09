/*
Program explanation:
  For the Constant time Big O Notation function in this example, no matter how big the array is. The function is going to to immediately grab and print out the first box in the given array

  This function counts as a constant time Big O Notation complexity because it grabs the first item, regardless of given array size. Therefore, the complexity curve will always be 1 no matter how big the given array is, because of the constant(1) time it will take to get the first item in the given array.
*/

const arr = ["box 1", "box 2", "box 3", "box 4", "box 5"];

const compressFirstBox = (boxes) => {
  console.log(boxes[0]);
};

compressFirstBox(arr); // O(1) => Constant Time

// Another Example of a Constant Time Big Big O Notation

// NOTE: Although this function now takes O(2) operations, it still completes in a constant amount of time. Therefore, it still falls under constant time complexity.

const boxes = [0, 1, 2, 3, 4, 5];

const logFirstTwoBox = (arr) => {
  console.log(arr[0]);
  console.log(arr[1]);
};

logFirstTwoBox(boxes); // O(2)
