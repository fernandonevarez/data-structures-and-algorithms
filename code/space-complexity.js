// NOTE: when it comes to space complexity, we don't care about the inputs, we care about the variables, data structures, function calls, and allocations that an algorithm requires.

const arr = [1, 2, 3, 4, 5];

const boo = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log("Boo!");
  }
};

boo(arr); // O(1)

const arrayOfHiNTimes = (length) => {
  let hiArray = []; // O(1)

  for (let i = 0; i < length; i++) {
    hiArray[i] = "hi"; // O(n) - we are creating new memory space for each item in the array
  }

  return hiArray;
};

console.log(arrayOfHiNTimes(6)); // O(n)

// ~~~~~~~~~~ Practice 1 ~~~~~~~~~~

// What would be the time complexity of comparing each tweet's date with every other tweet's date? (Hint: This would seem familiar with a past problem)
const tweets = [
  {
    tweet: "hi",
    date: 2012,
  },
  {
    tweet: "my",
    date: 2014,
  },
  {
    tweet: "teddy",
    date: 2018,
  },
];

// Answer: O(n^2) - it's gonna be a nested loop

// ~~~~~~~~~~ Practice 2 ~~~~~~~~~~

// What would be the time complexity of this code?

"bshbchdsbhjcbdshjc".length; // O(1) - This will depend on the language you are coding in.
