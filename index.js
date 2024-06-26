// 1
const calculateSum = (a, b) => {
   return a + b;
};

// 2
const isEven = (num) => {
   return num % 2 === 0;
};

// 3
const findMax = (array) => {
   let largestNum = array[0];

   array.forEach((element) => {
      if (element > largestNum) largestNum = element;
   });

   return largestNum;
};

// 4
const reverseString = (string) => {
   const stringArray = string.split("");
   const newStringArray = [];

   stringArray.forEach((element) => {
      newStringArray.unshift(element);
   });

   const finalString = newStringArray.join("");
   return finalString;
};

// 5
const filterOddNumbers = (array) => {
   return (filteredArray = array.filter((item) => item % 2 !== 0));
};

// 6
const sumArray = (array) => {
   const totalSum = array.reduce((number, sum) => {
      return sum + number;
   }, 0);

   return totalSum;
};

// 7

const sortArray = (array) => {
   let sortedArray = array.slice();

   sortedArray.sort(function (a, b) {
      return a - b;
   });

   return sortedArray;
};

// 8

const capitalizeFirstLetter = (string) => {
   if (string.length === 0) {
      return string;
   }
   return string.charAt(0).toUpperCase() + string.slice(1);
};
