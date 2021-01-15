'use strict';
/* User Stories
1. As a user, I would like to learn about the site owner so I can get to know them better.
2. As a user, I would like a personalized welcome message so that I feel like I am interacting with the site owner.

JS Requirements:
 - User Input must be normalized
 - Prompt the user for their name and display it in an alert
 - Five prompt questions
*/

/****
 * Service Worker Code
 * Source: https://developers.google.com/web/fundamentals/primers/service-workers
 */
/* Register a service worker */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('../about-me/sw.js').then(function (registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function (err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}


/*
// Ask The User their name - Display it in an alert - Force the user to enter a name
var userName;
while (userName === undefined || userName === null || userName === '') {
  userName = prompt('What is your name?');
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
