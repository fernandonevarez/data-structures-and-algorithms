// You can find the Google coding Interview here - https://www.youtube.com/watch?v=XKu_SEDAykw

// PROBLEM: You are given an collection of numbers that you are needing to find a matching pair that equals to a given sum and return the two value

// As an example, the collection of numbers can be
const arr1 = [1, 2, 3, 9];
const arr2 = [1, 2, 4, 4];

// and the given sum could be
const sum = 8;

const getPairEqualToSum = (arr, sum) => {
  for (let i = 0; i < arr.length; i++) {
    for (let x = i + 1; x < arr.length; x++) {
      if (arr[i] + arr[x] === sum) {
        console.log(`[${arr[i]} - ${arr[x]}]`);
      }
    }
  }
}; // O(n^2)

getPairEqualToSum(arr2, sum);

/*
TIPS FROM THE VIDEO:

When getting an coding interview, remember to ask question to get a better undertsanding of what you are getting tasked to do.
- You can write down the question and asking as many question you need to understand what you are needing to do. 
  examples: Could the numbers be negative or floating point numbers

- Before even starting to write out the code, the interviewer thought out loud and it's adviced to do so too because it allows the interviewee the opportunity to course correct you and help you end up answering the question they were wanting you to solve or even feed off of what you are saying out loud and help you to demonstrate your knowledge that you can expand on. but in the very least, it's gonna help you work that problem out and there is nothing wrong with speaking out loud during an interview.

- Thinking out the problem before writing the code is a must, in the interview the interviewer actually went through two iterations and the first soultion they came up with wasnt the best soultion and it's not going to be the best soultion for everyone. So think through what you are wanting to do and you might get chanellaged by the interviewer to think better, faster, and more efficiently. But one you are at a spot where you think you can start coding the problem after thinking it through, that's when you can start to write out the code.

- After creating the program, test the code and make sure to think of edge cases


*/
