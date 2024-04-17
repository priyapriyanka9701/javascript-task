// task 1:

// To Exchange the values of two numbers without using third variable and after
//  exchange the double of the values of two numbers .
// let a = 3
// let b = 4
// // here and b are two numbers ,now adding b to a(using add and assign operator).
// a = a+b
// b = a-b 
// a = a-b 
// console.log(a)
// console.log(b)
// // double of  a and b 
// a = 2*a
// b = 2*b
// console.log(a)
// console.log(b)

// Task :2
// Whenever the percentage is Entered, then the following conditions must be satisfied.
//       a) Percentage between 40 to 50 => To print "Buy a pen."
//       b) Percentage between 50 to 60 => To print "Buy a Book."
//       c) Percentage between 60 to 70 => To print "Buy a Bag."
//       d) Percentage between 70 to 80 => To print "Buy a Watch."
//       e) Percentage between 80 to 90 => To print "Buy a Mobile."
//       f) Percentage between 90 to 100 => To print "Buy an Laptop."
//       g) otherwise => To print "Fail"



// let percent = 100;

// if (percent>=40 && percent<50){
//     console.log("Buy a Pen")

// }
// else if(percent>=50 && percent<60){
//     console.log("Buy a Book")

// }
// else if(percent>=60 && percent<70){
//     console.log("Buy a Bag")

// }
// else if(percent>=70 && percent<80){
//     console.log("Watch")

// }
// else if(percent>=80 && percent<90){
//     console.log("Buy a Mobile")

// }
// else if(percent>=90 && percent<=100){
//     console.log("Buy a laptop")

// }
// else{
//     console.log("Fail")
// }

// using  switch statement.

// let percent = 0;

// switch (true) {
//     case (percent >= 40) && (percent < 50):
//         console.log("Buy a Pen")
//         break;

//     case (percent >= 50) && (percent < 60):
//         console.log("Buy a Book")
//         break;

//     case (percent >= 60) && (percent < 70):
//         console.log("Buy a Bag")
//         break;
//     case (percent >= 70) && (percent < 80):
//         console.log("Buy a watch")
//         break;
//     case (percent >= 80) && (percent < 90):
//         console.log("Buy a mobile")
//         break;
//     case (percent >= 90) && (percent < 100):
//         console.log("Buy a laptop")
//         break;

//      default:
//         console.log("can't get ur salary")
//         break;

// }


// TASK - 3

// check if a number is an even or odd. then the following conditions must be satisfied.
//      a) "given Number is Even and to print double of the number"
//      b) "given Number is odd and to print adding by two" 

// let num = 7

// if (num % 2 == 0) {
//     console.log("Given Number is Even")
//     num = num *2 
//     console.log(num)
// }
// else{
//     console.log("Given number is odd")
//     num = 2+num
//     console.log(num)
// }


// TASK - 4
// Create a Simple Calculator using Conditions
// Steps :
// 1. Ask the user to enter the first number.
// 2. Ask the user to enter the operation (+, -, *, /).
// 3. Ask the user to enter the second number.
// 4. Based on the operation entered:
// 5. If it's addition (+), add the two numbers together.
// 6. If it's subtraction (-), subtract the second number from the first number.
// 7. If it's multiplication (*), multiply the two numbers together.
// 8. If it's division (/), divide the first number by the second number.
// 9. Display the result of the operation.

// let operator = prompt("enter operator");
// let num1 = parseFloat(prompt("Enter first number: "));
// let num2 = parseFloat(prompt("Enter second number: "));

// let result;

// if (operator =='+'){
//     result = num1+num2

// }
// else if (operator =='-'){
//     result = num1-num2

// }
// else if (operator =='*'){
//     result = num1*num2

// }
// else if (operator =='/'){
//     result = num1/num2

// }

// console.log(result);
// TASK 5

// Write a program that uses a loop to calculate and display the sum of all numbers from 1 to 10.
// Steps :

// 1. Start with a variable sum set to 0.
// 2. Start a loop from 1 to 10.
// 3. Add the current loop variable to sum.
// 4. After the loop, sum will hold the sum of all numbers from 1 to 10.
// 5. Display the sum in the format "1+2+3+...+10 = sum".


// let sum = 0;

// for (let i=1;i<=10;i++){
//     sum = sum +i 
    
// }
// console.log(sum)


// TASK 6
// Write a program that uses a loop to calculate and display the factorial of a given number.

// Steps:
// 1. We first define the given number as givenNumber.
// 2. Then, we initialize the factorial variable to 1.
// 3. Next, we use for loop to iterate from the givenNumber down to 1.
// 4. each iteration, we multiply the factorial by the current value of i.
// 5. After the loop, the factorial variable holds the calculated factorial value.
// 6. Finally, we display the calculated factorial value using console.log( ).

// let givenNumber = 6;
//  fact = 1
//  for(i = 1;i<=givenNumber;i++){
//     fact=fact*i
//  }
//  console.log(fact)


// TASK 7

// Write a program that uses a loop to print a multiplication table for a given Number up to a certain range.

// let num = 7;
// let range = 10;
// let res;

// for (i = 1;i<=10;i++){
//    res = num * i 
//    console.log(num + " * "+ i + " = " +res);
// }

// TASK 8
// Write a program that uses a loop to find and display the common elements between two arrays of integers.

// Steps:
// Step 1: Imagine you have two lists of numbers.
// Step 2: Pick a number from the first list.
// Step 3: Look at each number in the second list to see if it matches the number you picked.
// Step 4: If you find a match, it means the number is common to both lists.
// Step 5: Repeat steps 2-4 for each number in the first list.
// Step 6: Once you've checked all numbers in the first list, you've found all the common elements.
// Step 7: Display the common elements you found.

// let a = [1,2,3,4,5,6,7,8,9]
// let b = [2,5,6,8,9]
// for(let i=0;i<a.length;i++){
//    for (let j = 0;j<b.length;j++){
//       if(a[i]==b[j]){
//          console.log(a[i] && b[j])
//       }
//    }
// }

// TASK 9

//Write a program that uses a loop to check if a given number is prime or not.

// Steps :
// 1. We start with the given number num (assumed as 17).
// 2. We assume initially that the number is prime (isPrime is set to true).
// 3. We check if the number is less than 2, which is a special case for prime numbers. If it is, we set isPrime to false.
// 4. If the number is greater than or equal to 2, we loop from 2 up to the square root of the number.
// 5. In each iteration, we check if the current number divides the given number evenly (with no remainder). If it does, we set isPrime to false and break out of the loop.
// 6. After the loop, we display the result indicating whether the number is prime or not.
                  
let number = parseInt(prompt("Enter positive integer"));
let isPrime = true;
if (number==1){
    console.log("number 1 is neither prime nor composite number");
}
else if(number>1){
    for (i=2;i<number;i++){
        if (number%i==0){
            isPrime=false;
            break;
        }
    }
    if (isPrime){
        console.log(` ${number} is a prime number`);
    }
    else{
        console.log(`${number} is a not a prime number`);
    }

}
else{
    console.log("given number is negative")
}

// TASK 10

// Write a program that uses a loop to reverse and display the elements of an array.

// 1. We start with the given array [1, 2, 3, 4, 5].
// 2. We initialize an empty array "reversedArray" to store the reversed elements.
// 3. We loop through each element of the original array in reverse order using a for loop 4. starting from the last index (array.length - 1) down to 0.
// 5. Inside the loop, we add each element to the beginning of the "reversedArray" using the push() method.
// 6. After looping through all elements of the original array, we display the "reversedArray", which contains the elements of the original array in reverse order.
