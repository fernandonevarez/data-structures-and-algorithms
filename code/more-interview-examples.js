// Given 2 arrays, create a function that let's a user know(true/false) wheather these two arrays contain any common items

/*
For Example:
const array1 = ['a', 'b', 'c', 'd'];
const array2 = ['z', 'y', 'i'];
SHOULD RETURN FALSE

const array1 = ['a', 'b', 'c', 'X'];
const array2 = ['z', 'y', 'X'];
SHOULD RETURN TRUE

*/

// Function will have:
// 2 paramaters - arrays - no size limits
// return true or false

/*
const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "x"];

const containsCommonItem = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    for (let x = 0; x < arr2.length; x++) {
      if (arr1[i] === arr2[x]) {
        return true;
      }
    }
  }
  return false;
}; // O(a*b)

console.log(containsCommonItem(array1, array2));
*/

/* ||||||||| Improve the time complexity ||||||||| */

const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "a"];

/*
array1 ==> object {
  a: true,
  b: true,
  c: true,
  x: true
}

array2[index] === object.properties
*/

/*
const containsCommonItem = (arr1, arr2) => {
  // first I'm gonna loop through the first array and create a object where properties equal to items in the array
  let map = {};

  for (let i = 0; i < arr1.length; i++) {
    if (!map[arr1[i]]) {
      const item = arr1[i];
      map[item] = true;
    }
  }

  // Then i will loop through the second array and check if the items in the second array exists in the already created object

  for (let i = 0; i < arr2.length; i++) {
    if (map[arr2[i]]) {
      return true;
    }
  }
  return false;
}; // O(a+b) - Time complexity
   // O(a)   - Space complexity

console.log(containsCommonItem(array1, array2));
*/

/* ||||||||| simplify the code through Javascript methods ||||||||| */

const containsCommonItem = (arr1, arr2) => {
  return arr1.some((item) => arr2.includes(item));
}; // O(a+b)

console.log(containsCommonItem(array1, array2));
