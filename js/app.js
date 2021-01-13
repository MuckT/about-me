'use strict';
/* User Stories
1. As a user, I would like to learn about the site owner so I can get to know them better.
2. As a user, I would like a personalized welcome message so that I feel like I am interacting with the site owner.

JS Requirements:
 - User Input must be normalized
 - Prompt the user for their name and display it in an alert
 - Five prompt questions
*/


// Ask The User their name - Display it in an alert - Force the user to enter a name
var userName;
while(userName === undefined || userName === null || userName === '') {
  userName = prompt('What is your name?');
}
alert(`Welcome to my about me page ${userName}! \nPlease answer questions in a 'Yes' / 'No' or 'Y' / 'N' format`);


// Write 5 questions. Must accept 'yes' or 'no' OR 'y' or 'n' In ANY CASE
// examples: Yes, yes, YEs, yeS, yEs, Y, y

// Ask Question #1
var questionOne = prompt('Did I go to The Evergreen State College?').toUpperCase();
// console.log(`User normalized answer to question one is: ${questionOne}`);
// Evaluate answer to question #1
if (questionOne === 'YES' || questionOne === 'Y') {
  // console.log('User has answered question #1 correctly');
  alert(`${userName} - That is correct!`);
} else {
  // console.log('User has answered question #1 incorrectly');
  alert(`${userName} - That is incorrect.`);
}

// Ask Question #2
var questionTwo = prompt('Do I like open source projects?').toUpperCase();
// console.log(`User normalized answer to question two is: ${questionTwo}`);
// Evaluate answer to question #2
if (questionTwo === 'YES' || questionTwo === 'Y') {
  // console.log('User has answered question #2 correctly');
  alert(`${userName} - That is correct!`);
} else {
  // console.log('User has answered question #2 incorrectly');
  alert(`${userName} - That is incorrect.`);
}

// Ask Question #3
var questionThree = prompt('Do I test software for a living?').toUpperCase();
// console.log(`User normalized answer to question three is: ${questionThree}`);
// Evaluate answer to question #3
if (questionThree === 'YES' || questionThree === 'Y') {
  // console.log('User has answered question #3 correctly');
  alert(`${userName} - That is correct!`);
} else {
  // console.log('User has answered question #3 incorrectly');
  alert(`${userName} - That is incorrect.`);
}

// Ask Question #4
var questionFour = prompt('Does GTFS stand for \'Get Tested For Sepsis?\'').toUpperCase();
// console.log(`User normalized answer to question four is: ${questionFour}`);
// Evaluate answer to question #4
if (questionFour === 'NO' || questionFour === 'N') {
  // console.log('User has answered question #4 correctly');
  alert(`${userName} - That is correct!`);
} else {
  // console.log('User has answered question #4 incorrectly');
  alert(`${userName} - That is incorrect. \nGTFS stands for General Transit Feed Specification`);
}

// Ask Question #5
var questionFive = prompt(`${userName}, should developers write unit tests?`).toUpperCase();
// console.log(`User normalized answer to question five is: ${questionFive}`);
// Evaluate answer to question #5
if (questionFive === 'YES' || questionFive === 'Y') {
  // console.log('User has answered question #5 correctly.');
  alert(`${userName} - That is correct!`);
} else {
  // console.log('User has answered question #5 correctly');
  alert(`${userName} - That is incorrect. Good developers write unit tests.`);
  window.open('https://cloud.google.com/solutions/devops/devops-tech-test-automation#ways_to_improve_continuous_testing', '_blank');
}
