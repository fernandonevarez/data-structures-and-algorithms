/*
Program explanation:
  For the linear time Big O Notation function in this example, no matter how big the array is. When the array is passed into the findNemo() function, the function is going to loop through each item in the array to find if the "nemo" string is in the array and print out "found nemo!" whenever it runs into the string that matches "nemo".

  This function counts as a linear time Big O Notation complexity because it has to loop through the whole array, regardless of its size. Therefore, the complexity curve will get bigger as the number of items in the array grows, causing a linear complexity curve.
*/

const smallArray = ["nemo"];

const mediamArray = [
  "dory",
  "bruce",
  "marlin",
  "nemo",
  "gill",
  "bloat",
  "nigel",
  "squirt",
  "darla",
  "hank",
];

const largeArray = new Array(10000).fill("nemo");

// ES5 function declaration syntax
// function findNemo(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === "nemo") {
//       console.log("found nemo!");
//     }
//   }
// }

// It's best pratice to use ES6 function declaration syntax
const findNemo = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "nemo") {
      console.log("found nemo!");
    }
  }
};

findNemo(largeArray); // O(n) => Linear Time
