# Big O Notation Cheat Sheet

---

## Big Os

- **O(1)**: Constant Time - No loops

  ```javascript
  const array = ["a", "b", "c", "d", "e"];

  console.log(array[0]); // O(1) => Constant Time
  ```

- **O(log n)**: Logarithmic Time - Usually searching algorithms have log n if they are sorted (Binary Search)

  ```javascript
  const binarySearch = (array, key) => {
    let low = 0;
    let high = array.length - 1;
    let mid;
    let element;

    while (low <= high) {
      mid = Math.floor((low + high) / 2, 10);
      element = array[mid];

      if (element < key) {
        low = mid + 1;
      } else if (element > key) {
        high = mid - 1;
      } else {
        return mid;
      }
    }

    return -1;
  };
  ```

- **O(n\*log(n))**: Log Linear Time - Usually sorting operations

  ```javascript
  const quickSort = (array) => {
    if (array.length < 2) return array;

    const pivot = array[0];
    const lesser = [];
    const greater = [];

    for (let i = 1; i < array.length; i++) {
      if (array[i] < pivot) {
        lesser.push(array[i]);
      } else {
        greater.push(array[i]);
      }
    }

    return quickSort(lesser).concat(pivot, quickSort(greater));
  };
  ```

- **O(n)**: Linear Time - For loops, while loops through n items

  ```javascript
  const array = ["a", "b", "c", "d", "e"];

  array.forEach((item) => {
    console.log(item); // O(n) => Linear Time
  });
  ```

- **O(n^2)**: Quadratic Time - Every element in a collection needs to be compared to every other element. Two nested loops

  ```javascript
  const array = ["a", "b", "c", "d", "e"];

  array.forEach((item) => {
    array.forEach((item) => {
      console.log(item); // O(n^2) => Quadratic Time
    });
  });
  ```

- **O(2^n)**: Exponential Time - Recursive algorithms that solves a problem of size N

  ```javascript
  const fibonacci = (num) => {
    if (num <= 1) return 1;

    return fibonacci(num - 1) + fibonacci(num - 2); // O(2^n) => Exponential Time
  };
  ```

- **O(n!)**: Factorial Time - You are adding a loop for every element

  ```javascript
  const factorial = (num) => {
    if (num === 1) return 1;

    return num * factorial(num - 1); // O(n!) => Factorial Time
  };
  ```

## Iterating through half a collection is still O(n)

```javascript
const array = ["a", "b", "c", "d", "e"];

array.slice(0, array.length / 2).forEach((item) => {
  console.log(item); // O(n) => Linear Time
});
```

## Two separate collections: O(a + b)

```javascript
const array = ["a", "b", "c", "d", "e"];
const array2 = ["f", "g", "h", "i", "j"];

array.forEach((item) => {
  console.log(item); // O(a) => Linear Time
});

array2.forEach((item) => {
  console.log(item); // O(b) => Linear Time
});

// O(a + b) => Linear Time
```

## **What can cause time in a function?**

- Operations (+, -, \*, /)
- Comparisons (<, >, ==)
- Looping (for, while)
- Outside Function call (function())

## **Rule Book**

- Rule 1: Always worst Case
- Rule 2: Remove Constants
- Rule 3: Different inputs should have different variables. O(a+b). A and B arrays nested would be O(a\*b)
- Rule 4: Drop Non-dominant terms

---
