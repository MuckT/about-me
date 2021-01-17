'use strict';
/* Lab 02
// User Stories
1. As a user, I would like to learn about the site owner so I can get to know them better.
2. As a user, I would like a personalized welcome message so that I feel like I am interacting with the site owner.

Requirements:
  - User Input must be normalized
  - Prompt the user for their name and display it in an alert
  - Five prompt questions

// Lab 03
1. As a user, I would like to view a series of data related to the site owners interest so that the I can quickly view more information about them.
  Requirement 1a. Create a “Top Ten” at the bottom of your HTML

2. As a user, I would like to be guided to an answer through a series of feedback responses so that I can learn more about the site owner.
  Requirement 2a. Add a 6th question to the guessing game that takes in a numeric input by prompting the user to guess a number.
  Requirement 2b. Indicates through an alert if the guess is “too high” or “too low”.
  Requirement 2c. It should give the user exactly four opportunities to get the correct answer.
  Requirement 2d. After all attempts have been exhausted, tell the user the correct answer. Consider using a loop of some sort.

3. As a user, I would like to guess the answer to a question that could have many possibilities so that I can have fun with with a guessing game.
  Requirement 3a. Add a 7th question that has multiple possible correct answers that are stored in an array.
  Requirement 3b. Give the user 6 attempts to guess the correct answer.
  Requirement 3c. The guesses will end once the user guesses a correct answer or they run out of attempts.
  Requirement 3d. Display all the possible correct answers to the user.
  Requirement 3e. Consider using a loop of some sort for this question.

4. As a user, I would like to know my final score so that I can know how well I did.
  Requirement 4a. Keep track of the total number of correct answers. At the end tell them how many they got correct out of the 7 questions asked.

Stretch goals:
  - Attempt to make your code more DRY by putting all of the questions, answers, and responses to the first five yes/no questions into arrays (or even one huge multidimensional array), and modifying the game logic such that a ‘for’ loop will control the flow from question to question.
  - Make the number-guessing question use a random number as its correct answer.
*/
/*
// Ask The User their name - Display it in an alert - Force the user to enter a name
var userName = prompt('What is your name?');
while(!userName) {
  userName = prompt('Really, what is your name?');
}
alert(`Welcome to my about me page ${userName}! \nPlease answer questions in a 'Yes' / 'No' or 'Y' / 'N' format`);


// Write 5 questions. Must accept 'yes' or 'no' OR 'y' or 'n' In ANY CASE
// examples: Yes, yes, YEs, yeS, yEs, Y, y

// Ask Question #1
var answerOne = prompt('Did I go to The Evergreen State College?').toUpperCase();
// console.log(`User normalized answer to question one is: ${answerOne}`);
// Evaluate answer to question #1
if (answerOne === 'YES' || answerOne === 'Y') {
  // console.log('User has answered question #1 correctly');
  alert(`${userName} - That is correct!`);
} else {
  // console.log('User has answered question #1 incorrectly');
  alert(`${userName} - That is incorrect.`);
}

// Ask Question #2
var answerTwo = prompt('Do I like open source projects?').toUpperCase();
// console.log(`User normalized answer to question two is: ${answerTwo}`);
// Evaluate answer to question #2
if (answerTwo === 'YES' || answerTwo === 'Y') {
  // console.log('User has answered question #2 correctly');
  alert(`${userName} - That is correct!`);
} else {
  // console.log('User has answered question #2 incorrectly');
  alert(`${userName} - That is incorrect.`);
}

// Ask Question #3
var answerThree = prompt('Do I test software for a living?').toUpperCase();
// console.log(`User normalized answer to question three is: ${answerThree}`);
// Evaluate answer to question #3
if (answerThree === 'YES' || answerThree === 'Y') {
  // console.log('User has answered question #3 correctly');
  alert(`${userName} - That is correct!`);
} else {
  // console.log('User has answered question #3 incorrectly');
  alert(`${userName} - That is incorrect.`);
}

// Ask Question #4
var answerFour = prompt('Does GTFS stand for \'Get Tested For Sepsis?\'').toUpperCase();
// console.log(`User normalized answer to question four is: ${answerFour}`);
// Evaluate answer to question #4
if (answerFour === 'NO' || answerFour === 'N') {
  // console.log('User has answered question #4 correctly');
  alert(`${userName} - That is correct!`);
} else {
  // console.log('User has answered question #4 incorrectly');
  alert(`${userName} - That is incorrect. \nGTFS stands for General Transit Feed Specification`);
}

// Ask Question #5
var answerFive = prompt(`${userName}, should developers write unit tests?`).toUpperCase();
// console.log(`User normalized answer to question five is: ${answerFive}`);
// Evaluate answer to question #5
if (answerFive === 'YES' || answerFive === 'Y') {
  // console.log('User has answered question #5 correctly.');
  alert(`${userName} - That is correct!`);
} else {
  // console.log('User has answered question #5 correctly');
  alert(`${userName} - That is incorrect. Good developers write unit tests.`);
  window.open('https://cloud.google.com/solutions/devops/devops-tech-test-automation#ways_to_improve_continuous_testing', '_blank');
}
*/
