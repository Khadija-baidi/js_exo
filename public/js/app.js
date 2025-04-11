// / Exercise 1:
//  Greetings
// Create a function called greet that takes a name parameter and prints a greeting message to the console. Call the function with different names.

// Define the greet function
function greet(name) {
  console.log(`SALAM, ${name}!`);
}

// Call the function with different names
greet("khadija");
greet("elroumaisaa");
greet("dounia");
greet("ahlam")

// Exercise 2: Sum of Numbers
// Create a function called sumNumbers that takes an array of numbers as a parameter and returns the sum of those numbers. Call the function with different arrays.  


function sumNumbers(numbers) {
  return numbers.reduce((acc, current) => acc + current, 0);
}
console.log(sumNumbers([2, 6, 8, 4]));
console.log(sumNumbers([15, 20, 25])); 
console.log(sumNumbers([50, 10, 20]));  

// Exercise 4: Even or Odd
// Create a function called isEven that takes a number as a parameter and prints whether the number is even or odd to the console. Use an if-else statement. Call the function with different numbers.

function isEven(number) {
  if (number %2===0) {
    console.log(number+"is even");
  }
  else {
    console.log(number+"is odd");
  }
  
}
isEven(2)
isEven(9)
// Exercise 6: Palindrome Check
// Create a function called isPalindrome that takes a string as a parameter and prints whether the string is a palindrome (reads the same backward as forward) to the console. Ignore spaces and case. Use loops and conditional statements. Call the function with different strings.

function isPalindrome(word) {
  let input = word.split('')
  let rev_input = []
  input.forEach(element => {
      rev_input.unshift(element);
  })
  if (word == rev_input.join('')) {
      console.log(`${word} is a palindrome : ${rev_input.join('')}`);
  }
  else {
      console.log(`${word} is not a palindrome : ${rev_input.join('')}`);
  }
}
isPalindrome('coloc')



// Exercise 7: Maximum of Two Numbers
// Create a function called maxOfTwo that takes two numbers as parameters and prints the larger of the two to the console. Use an if-else statement. Call the function with different numbers.

function maxOfTwo(num1, num2) {
  if (num1 > num2) {
      console.log(`${num1} is large than ${num2}`);
  }else
  console.log(`${num1} is small than ${num2}`);

}
maxOfTwo(20, 30);
maxOfTwo(50, 15);

// Exercise 8: Array Sum
// Create a function called arraySum that takes an array of numbers as a parameter and prints the sum of those numbers to the console. Use the for...of loop. Call the function with different arrays.
function array(num) {
  let sum = 0;
for (let index = 0; index < num.length; index++) {
  sum += num[index];
}
console.log(sum);
}
array([1, 5, -9, 44]);      
array([11, 80, 220]);  
// Exercise 9: Factorial Without Recursion
// Create a function called factorial that takes a number as a parameter and prints the factorial of that number to the console. Calculate the factorial without using recursion. Call the function with different numbers.
function factorial(number) {
  let result = 1;

  for (let i = 1; i <= number; i++) {
    result *= i; 
  }

  console.log(number,result);
}
factorial(5); 
factorial(3); 
// Exercise 10: Vowel Checker
// Create a function called isVowel that takes a character as a parameter and prints whether the character is a vowel or not to the console. Use an if-else statement. Call the function with different characters.

 function isVowel(character) {
  let arrey =["a", "e", "y", "o", "u"]
     return arrey.includes(character.toLowerCase())
 }
 
 console.log(isVowel("a"));
 console.log(isVowel("y"));
 console.log(isVowel("f"));
// Exercise 11: Largest in Array
// Create a function called largestInArray that takes an array of numbers as a parameter and prints the largest number in the array to the console. Use the Math.max function. Call the function with different arrays.
function largestInArray(numbers) {
  let largest = Math.max(...numbers); //  ... no9ate katraje3 kola wehda bohdha
  console.log("The largest number is: " + largest);
}


largestInArray([8]);   
largestInArray([1,2,3,4,5]);      
largestInArray([5,10,15,20]);      
largestInArray([-3,-7,-2,-1]);      
// Exercise 12: Prime Number Checker
// Create a function called isPrime that takes a number as a parameter and prints whether the number is a prime number or not to the console. Use loops and conditional statements. Call the function with different numbers.
function isPrime(x) {
  let checkpr = "prime"

  for (let index = 2; index < x; index++) {
    if (x % index == 0) {
      checkpr = "its not prime"
    }
  }

  console.log(checkpr)
}

isPrime(8) 
// Exercise 13: Sum of Digits
// Create a function called sumOfDigits that takes a positive integer as a parameter and calculates the sum of its digits. Print the result to the console.
function sumOfDigits(x) {
  let total = 0;
  let i = 0;

  while (i < String(x).length) {
    total += parseInt(String(x).split("")[i]);
    i++;
  }

  console.log(`total = : ${total}`);
}
sumOfDigits(857)
// Create a function called arrayIntersection that takes two arrays as parameters and returns a new array containing the common elements between them.

function arrayIntersection(arr1, arr2) {
  let intersection = arr1.filter(element => arr2.includes(element));
  return intersection;
}

console.log(arrayIntersection([1, 2, 3, 4], [3, 4, 5, 6])); 
console.log(arrayIntersection([10, 20], [30, 40]));
