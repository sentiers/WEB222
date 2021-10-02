/********************************************************************************* 
* WEB222 ? Assignment 01 
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of
* this assignment has been copied manually or electronically from any other source (including web sites)
* or distributed to other students.
*
* Name: Hyunji Cho   Student ID: #128065182   Date: 2019-05-28
*
********************************************************************************/

/*****************************
* Task 1
*****************************/

var studentName = "Hyunji Cho";
var numberOfCourses = 5;
var program = "CPA";
var partTimeJob = false;
var job;

console.log("My name is " + studentName + 
            " and I'm in " + program + 
            " program. I'm taking " + numberOfCourses +
            " course in this semester.");

if (partTimeJob == true) 
    job = "have";
else 
    job = "don't have";

console.log("My name is " + studentName + 
            " and I'm in " + program + 
            " program. I'm taking " + numberOfCourses +
            " course in this semester and I " + job +
            " a part-time job now.");

/*****************************
* Task 2
*****************************/

var currentYear = 2019;
var age = prompt("Please enter your age:");

console.log("You were born in year of " + (currentYear - age) + ".");

var studyYear = prompt("Enter the number of years you expect to study in the college:");

console.log("You will graduate from Seneca college in the year of "
            + (currentYear + parseInt(studyYear)) + ".");

/*****************************
* Task 3
*****************************/

var celsiusTemp = 25;
var celsiusToFahrenheit = celsiusTemp * (9/5) + 32;

console.log(celsiusTemp + "¡ÆC" + " is " + celsiusToFahrenheit + "¡ÆF");

var fahrenheitTemp = 85;
var fahrenheitToCelsius = (fahrenheitTemp - 32) * (5/9);

console.log(fahrenheitTemp + "¡ÆF is " + fahrenheitToCelsius.toFixed() + "¡ÆC");

/*****************************
* Task 4
*****************************/

for (var i = 0; i <= 10; i++){
    
    if ((i % 2) == 0)
        console.log(i + " is even");
    else 
        console.log(i + " is odd");
}

/*****************************
* Task 5
*****************************/

//Function Declaration
function largerNum (num1, num2) { 
    if (num1 > num2) 
        return num1;
    else
        return num2;
}

//Function Expression
var greaterNum = function (num1, num2) { 
    if (num1 > num2)
        return num1;
    else
        return num2;
};

//largerNum function
console.log("The larger number of 1 and 3 is " + largerNum(1,3) + ".");
console.log("The larger number of 6 and 8 is " + largerNum(6,8) + ".");

//greaterNum function
console.log("The larger number of 1 and 6 is " + largerNum(1,6) + ".");
console.log("The larger number of 3 and 8 is " + largerNum(3,8) + ".");

/*****************************
* Task 6
*****************************/

function Evaluator(){
    var sum = 0;
    var avg = 0;
    
    for (var i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }
    
    avg = sum / arguments.length;
    
    if (avg >= 50)
        return true;
    else
        return false;
}

console.log("Average of 30 50 is greater than or equal to 50: " + Evaluator(30,50));
console.log("Average of 20 30 10 is greater than or equal to 50: " + Evaluator(20,30,10));
console.log("Average of 10 30 70 100 is greater than or equal to 50: " + Evaluator(10,30,70,100));

/*****************************
* Task 7
*****************************/

var Grader = function(score){
    if (score >= 90)
        return 'A+';
    else if (score >= 80)
        return 'A';
    else if (score >= 75)
        return 'B+';
    else if (score >= 70)
        return 'B';
    else if (score >= 65)
        return 'C+';
    else if (score >= 60)
        return 'C';
    else if (score >= 55)
        return 'D+';
    else if (score >= 50)
        return 'D';
    else 
        return "F";
}

console.log("Your Score: 87 Your Grade: " + Grader(87));
console.log("Your Score: 49 Your Grade: " + Grader(49));
console.log("Your Score: 73 Your Grade: " + Grader(73));

/*****************************
* Task 8
*****************************/

function showMultiples(num, numMultiples) {
    var output = "";
    for (var i = 1; i <= numMultiples; i++) {
      var multiple = num * i;
      output += num + " x " + i + " = " + multiple + "\n";
    }
    return output;
}

  console.log(showMultiples(5,4));
  console.log(showMultiples(6,3));
  console.log(showMultiples(8,4));