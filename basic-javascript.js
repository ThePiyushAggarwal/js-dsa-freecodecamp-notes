// Replace Loops using Recursion

function multiply(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
    }
  }

function sum(arr, n) {
  if(n<=0) {
    return 0
  } else {
    return sum(arr, n-1) + arr[n-1]
  }
}

// Profile Lookup -- Title
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];
function lookUpProfile(name, prop) {
  // Only change code below this line
  for(let i=0; i<contacts.length; i++) {
    if(contacts[i].firstName === name) {
      if(contacts[i][prop] !== undefined) {
        return contacts[i][prop]
      } else {
        return "No such property"
      }
    } else if(i===contacts.length-1) {
      return "No such contact"
    }
  }
  // Only change code above this line
}
lookUpProfile("Akira", "likes");

// Generate Random Number in a range, inclusive
function randomRange(myMin, myMax) {
  // Only change code below this line
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
  // Only change code above this line
}

// Use Recursion to Create a Countdown
function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}
console.log(countup(5)); // [1,2,3,4,5]

// Use Recursion to Create a Range of Numbers
function rangeOfNumbers(startNum, endNum) {
  if(endNum-startNum===0) {
    return [startNum]
  } else {
    const range = rangeOfNumbers(startNum+1, endNum)
    range.unshift(startNum)
    return range
  }
};
