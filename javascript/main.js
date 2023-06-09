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
