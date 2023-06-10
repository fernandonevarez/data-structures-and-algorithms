<div style="text-align: center; font-size: 50px">
Big O Notation Notes
</div>

## Table of Contents

- [What is good code?](#what-is-good-code?)
- [Big O Notation](#big-o-notation)

## What is good code?

When talking about what is considered good code, there are two main things we think about, readability and scalability.

When evaluating the quality of code, a factor we consider is its cleanliness and readability. It is crucial for other developers to comprehend the code and its intended purpose within the program. While comments can aid in understanding, it is equally important to ensure the code itself is readable and easy to follow. Being a 'ninja coder' (someone who writes efficient but hard-to-understand code) is not beneficial for team projects. Therefore, prioritizing easy-to-understand code is essential.

Furthermore, it is equally important to have code that is scalable. Top tech companies, seek developers who can write code that is not only readable but also scalable. Scalability ensures that the code can handle increased data loads, user traffic, and evolving requirements without significant performance degradation. Therefore, aspiring developers should strive for both readability and scalability in their code to meet the expectations of leading tech companies.

### **But how do I measure scalability?**

We can measure the scalability of code by the amount of memory it requires and the time complexity of the code. We measure time complexity of our code using the Big O Notation. This notation helps us analyze the performance characteristics and efficiency of algorithms, allowing us to understand how the code's execution time or space requirements grow as the input size increases. By evaluating the time complexity(speed) of our code using Big O Notation, we can make informed decisions to optimize and improve its performance.

However it's also important to point out that the amount of memory a program uses is also important too because we may have limited memory on our computer or server. So we want to make sure that our code is not using too much memory. So we can also use Big O Notation to measure the space complexity(memory) of our code.

---

## Big O Notation

---

![Big O Notation Chart](./note_images/big-o-notation.png)

This chart helps to Visualize how when a function's input size increases, the number of operations required to complete the function increases ultimately increasing the time it takes to complete the function and create a complexity curve that can be used to determine the Big O Notation of the function.

### The Different Types of Big O Notation

When we talk about big o notation, most of the time we are thinking and talking about the same thing and that's Big Oh. But there are actually different types of big o notation(like big omega, and big theta notations) and you can learn more about them [here](https://www.quora.com/What-is-the-difference-between-big-oh-big-omega-and-big-theta-notations).

### Simplifying Big O Notation

When writing Big O Notation, there are a few rules we can follow to simplify the notation.

- **Rule 1**: Whenever we are calcuating the Big O Notation of a function, we always take the worst-case scenario. For example, in the code below

  ```javascript
  const array = [
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
  const findNemo = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      console.log("running");
      if (arr[i] === "nemo") {
        console.log("found nemo!");
      }
    }
  };

  findNemo(array); // O(n) => Linear Time
  ```

  ```bash
  # Output
  running
  running
  running
  found nemo!
  running
  running
  running
  running
  running
  running
  ```

  we could improve this by adding a break statement to the if statement so that the function stops running once it finds nemo. However, we are not concerned with the best-case scenario, because if nemo was at the end of the given array, the function would still have to iterate through the entire array to find nemo. Therefore, we are only concerned with the worst-case scenario, which is that nemo is at the end of the array. Causing the Big O Notation of the function to be O(n).

  ```javascript
  const findNemo = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      console.log("running");
      if (arr[i] === "nemo") {
        console.log("found nemo!");
        break;
      }
    }
  };
  ```

  ```bash
  # Output
  running
  running
  running
  found nemo!
  ```

- **Rule 2**: Whenever we are calcuating the Big O Notation of a function, we always drop the constants. For example, in the code below

  ```javascript
  const printFirstItemThenFirstHalfThenSayHi100times(arr) => {
    console.log(arr[0]); // O(1) => Constant Time

    const middleIndex = Math.floor(arr.length / 2);
    let index = 0;

    while (index < middleIndex) { // O(n/2) => Linear Time
      console.log(arr[index]);
      index++;
    }

    for (let i = 0; i < 100; i++) { // O(100) => Constant Time
      console.log("hi");
    }
  }
  ```

  The Big O Notation of this function would be O(1 + n/2 + 100). However, we can simplify this to O(n) by dropping the constants because as the input size increases, the constants become insignificant and we are only concerned with the growth of the function.

- **Rule 3**: Whenever we are calcuating the Big O Notation of a function, we always keep different terms for different inputs. For example, in the code below

  ```javascript
  const printAllNumbersThenAllPairSums = (arr1, arr2) => {
    arr1.forEach((num) => {
      console.log(num1);
    });

    arr2.forEach((num) => {
      console.log(num);
    });
  };
  ```

  The Big O Notation of this function would be O(a + b) because we are iterating through two different arrays. However, we cannot simplify this to O(n) because we are iterating through two different arrays.

- **Rule 4**: Whenever we are calcuating the Big O Notation of a function, we always drop the non-dominant terms. For example, in the code below

  ```javascript
  const printAllNumbersThenAllPairSums = (arr) => {
    console.log("these are the numbers:");
    arr.forEach((num) => console.log(num)); // O(n) => Linear Time

    console.log("and these are their sums:");
    arr.forEach((firstNum) => {
      // O(n^2) => Quadratic Time
      arr.forEach((secondNum) => {
        console.log(firstNum + secondNum);
      });
    });
  };
  ```

  The Big O Notation of this function would be O(n + n^2). However, we can simplify this to O(n^2) by dropping the non-dominant terms because as the input size increases, the non-dominant terms become insignificant and we are only concerned with the growth of the function.

---

## Space Complexity

---

### What is Space Complexity?

When a program runs, it has two ways to remember things, the heap and the stack. The heap is where the program stores variables that it will use later. The stack is where the program stores information about the function calls it is currently running. The space complexity of a function is how much memory it takes up in the heap and the stack.
