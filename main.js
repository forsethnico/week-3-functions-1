/*
=======================================================

** Week 3 - Project 1 **
*** Function Exercises ***

Below are a number of problems for you to solve
using JS. The JS code can be written below each
problem and the result can be displayed in the HTML page.

BASIC TRACK: 1-10
ADVANCED TRACK: 11-15
=======================================================
*/
document.getElementById("q0").innerHTML = "JS Page Connected Properly!";
document.getElementById("q0").classList.add("status-good");

// 1. Create a function that simply returns a string that says something funny
//    when it is called and then displayed into the HTML page.

var funny = function() {
    return ("Two peanuts were walking down the street. One was a salted.");
};

document.getElementById('q1').innerHTML = funny();
// 2. Define a function called "divideByTwo".
//    It should accept one parameter within a text field called "number" and
//    submitted when a button is clicked.
//    The function should divide the number by two and
//    then displayed into the HTML page.

var divideByTwo = function(number) {
    return number / 2;
};

document.getElementById('button2').addEventListener("click", function() {
    document.getElementById('q2').innerHTML = divideByTwo(document.getElementById("findNumber").value);
});
// 3. Define a function called "greeting".
//    It should accept two parameters within input fields, which will both be first names.
//    The function should display to the HTML page a greeting to both people.
 var greeting = function(firstName,secondName){
   return "Hello there, " + firstName + " and " + secondName + ". You both smell like poop.";
 };

 document.getElementById('button3').addEventListener("click", function() {
   document.getElementById('q3').innerHTML = greeting(document.getElementById("name1").value, document.getElementById("name2").value);
});

// 4. Create a function that finds the average of 6 numbers passed in when called
//    and returns the value and is then displayed in the HTML page.

var averages = function(num1,num2,num3,num4,num5,num6){
  return (((+num1) + (+num2) + (+num3) + (+num4) + (+num5) + (+num6)) / 6);
};

document.getElementById('button4').addEventListener("click", function() {
  document.getElementById('q4').innerHTML = averages(document.getElementById("num1").value,
  document.getElementById("num2").value,document.getElementById("num3").value,
  document.getElementById("num4").value,document.getElementById("num5").value,
  document.getElementById("num6").value);
});

// 5. You use Amazon Subscribe & Save to have six cans of cashews automatically sent to you each month.
//    Write a function that takes the price per unit and calculates the total for you each month.
//    Since the price of the cashews can change anytime, pass that amount into the function to get your total price.
var cans = 6
var cashews = function(price,cans){
  return (price * cans);
};

document.getElementById('button5').addEventListener("click", function() {
  document.getElementById('q5').innerHTML = "Your monthly amount due for cashews is: $" + cashews(document.getElementById("numPrice").value,
  cans);
});

// 6. Define functions called "area" and "perimeter". They should both accept two parameters and calculate the area and perimeter of a rectangle.

var area = function(height, width) {
    return (height * width);
};

var perimeter = function(height1, width1) {
    return ((2 * height1) + (2 * width1));
};

document.getElementById('button6').addEventListener("click", function() {
    document.getElementById('q6a').innerHTML = area(document.getElementById("rectHeight").value,
        document.getElementById("rectWidth").value);
    document.getElementById('q6b').innerHTML = perimeter(document.getElementById("rectHeight").value,
        document.getElementById("rectWidth").value);

});

// 7. Define a function called "quarter". It accepts one parameter called "number".
//    The function will return a value which is one quarter of the number provided.

var quarter = function(number){
  return (number / 4);
};

document.getElementById('button7').addEventListener("click", function() {
    document.getElementById('q7').innerHTML = "Here lies the quartered number: " + quarter(document.getElementById("findNum").value);
});


// 8. Write a function called "sleepings", it should accept one parameter, an integer called "hours".
//    Write a conditional statement inside of the function. If the number of hours is more than 8, display a statement to the HTML page about getting enough rest.
//    If the number of hours is less than 8, print a statement recommending the user get more shut eye.

function sleepings(hours) {
    if (hours >= 8) {
        return ("You're so refreshed and alert. Congrats on the sleeps.");
    } else {
        return ("You need to go home and sleep ya zombie.");
    }
}
document.getElementById('button8').addEventListener("click", function() {
    document.getElementById('q8').innerHTML = sleepings(document.getElementById("findSleep").value);
});

// 9. Develop a function that determines a person's age by asking them for their birth year.
function age(birth) {
    return (2016 - birth);
};

document.getElementById('button9').addEventListener("click", function() {
    document.getElementById('q9').innerHTML = "You are " + age(document.getElementById("findBirth").value) + " years old.";
});
// 10. Write a function that accepts the following array and separates the people into two teams. Display each team within the HTML page.
//    No names next to each other in the array should be on the same team.
     teammates = ["Harold", "Bob", "Sue", "Grady", "Notorious B.I.G.", "JavaCrypt", "Weird guy in the back", "Gary", "Carol", "Hipster Tim", "Janet"]

     var teamA = []
     var teamB = []

     function makeTeams(teammates) {
         for (i = 0; i < teammates.length; i += 2) {
             teamA.push(teammates[i]);
         }
         for (i = 1; i < teammates.length; i += 2) {
             teamB.push(teammates[i]);
         }
         document.getElementById('q10').innerHTML += "<p>Team A: " + teamA + "</p>" + "<p>Team B: " + teamB + "</p>";
     };

     makeTeams(teammates);

// 11. Allow a user to enter a three digit number.
//     Write a function that adds the numbers together.
//     Hint #1: You need to turn a string into an integer.
//     Hint #2: Strings can be treated as arrays too.

function threes(findThree) {
    var stringSplit = findThree.split("");

    var total = 0;
    for (i = 0; i < stringSplit.length; i++) {
        var num = parseInt(stringSplit[i])
        total += num;
    }
    return "The total is: " + total;
}
document.getElementById('button11').addEventListener("click", function() {
    document.getElementById('q11').innerHTML = threes(document.getElementById("findThree").value)
});

// 12. You've finally gotten around to counting the change in your piggy bank.
//     Write a function that accepts four parameters from a user (quarters, dimes, nickels, and pennies).
//     The function should take each number of coins and multiply it times each coin's value.
//     Finally, it should return the total amount of change you have in the following format: "$32.77"
//     HINT: Understanding the toFixed method will help you with the format.

function piggy(quarters,dimes,nickels,pennies){
  var qTotal = (quarters * 0.25);
  var dTotal = (dimes * 0.10);
  var nTotal = (nickels * 0.05);
  var pTotal = (pennies * 0.01);
  var total = (qTotal + dTotal + nTotal + pTotal);
  return "$" + total.toFixed(2);
};

document.getElementById('button12').addEventListener("click", function() {
    document.getElementById('q12').innerHTML = "You have: " + piggy(document.getElementById("quarters").value,
    document.getElementById("dimes").value,
    document.getElementById("nickels").value,
    document.getElementById("pennies").value)
});

// ADVANCED TRACK



// A. Develop a function that cleans up a phone number entered by a user.
//     The rules are as follows:
//        If the phone number is less than 10 digits or more than 11 digits, assume that it is bad number
//        If the phone number is 10 digits assume that it is good
//        If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits
//        If the phone number is 11 digits and the first number is not 1, then it is a bad number.
//        HINT: You may need to use the charAt method.



// B. Create a function that determines whether a parameter is a number or not.
//     Iterate over the elements in the following array to determine if each is a number.
//     HINT: You may need to use the isNaN method.
      //  arrayOfAllTheThings = ["one", 23, {thingsWhalesLove: "beaches"}, "six hundred", 33, 6834, "5,435"]



// C. Create a die rolling function that accepts no parameters.
//     It rolls two six-sided-dice, adds the two numbers together, and returns a roll value.
//     Display the result in the HTML page.
//     To get the random number rolled by each die, use Math.random and Math.floor.



// D. Using your die roll function above, figure out how many times it would take a user
//     to get around a Monopoly board once. A monopoly board has 40 spaces total.



// E. Write a function that takes a year from a user
//    and reports whether or not it is a leap year.
//    Display the result in the HTML page.
//    Remember, a leap year occurs:
//        On every year that is evenly divisible by 4
//        Except every year that is evenly divisible by 100
//        Unless the year is also evenly divisible by 400
//        For example, 1997 is not a leap year, but 1996 is. 1900 is not a leapyear, but 2000 is.
