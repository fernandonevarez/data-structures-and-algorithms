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

const findNemo = (arr) => {
  // I'm using ES6 function declaration syntax
  for (const i = 0; i < arr.length; i++) {
    if (arr[i].toLowercase() === "nemo") {
      console.log("found nemo!");
    }
  }
};

findNemo(largeArray); // O(n) => Linear Time
