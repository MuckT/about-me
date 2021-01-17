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

3. As a user, I would like to guess the answer to a question that could have many possibilities so that I can have fun with a guessing game.
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


// Ask The User their name - Display it in an alert - Force the user to enter a name
var userName = prompt('What is your name?');
while(!userName) {
  userName = prompt('Really, what is your name?');
}
alert(`Welcome to my about me page ${userName}! \nPlease answer questions in a 'Yes' / 'No' or 'Y' / 'N' format.\n *Unless otherwise noted`);


// Write 5 questions. Must accept 'yes' or 'no' OR 'y' or 'n' In ANY CASE
// examples: Yes, yes, YEs, yeS, yEs, Y, y

// Keep track of score
var correctAnswers = 0;

// Ask Question #1
var answerOne = prompt('Did I go to The Evergreen State College?').toUpperCase();
// console.log(`User normalized answer to question one is: ${answerOne}`);
// Evaluate answer to question #1
if (answerOne === 'YES' || answerOne === 'Y') {
  // console.log('User has answered question #1 correctly');
  correctAnswers++;
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
  correctAnswers++;
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
  correctAnswers++;
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
  correctAnswers++;
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
  correctAnswers++;
} else {
  // console.log('User has answered question #5 correctly');
  alert(`${userName} - That is incorrect. Good developers write unit tests.`);
  window.open('https://cloud.google.com/solutions/devops/devops-tech-test-automation#ways_to_improve_continuous_testing', '_blank');
}


// Ask Question #6 - Guessing Game & Random Int Generator
var randomNumber = Math.ceil(Math.random(0, 1) * 100);
// console.log(`Random Number Generated is: ${randomNumber}`);

// Array to store previous guesses - Personal Stretch Goal
var previousGuesses = [];

// console.log(previousGuesses);
for (let i = 0; i < 4; i++) {
  var userGuess = +prompt(`Guess a Random Number between 0 and 100!\nNumber of guesses remaining ${4-i}`);
  // console.log(`Random user guess is: ${randomNumber}`);
  while (!userGuess || userGuess < 0 || userGuess > 100) {
    userGuess = +prompt(`Converted value of: '${userGuess}' is not a number, or not in the valid range. Please try again.`);
  }
  // Don't count previously entered guesses against the user
  var prevGuessUsed = false;
  for (let j = 0; j < previousGuesses.length; j++) {
    if (previousGuesses[j] === userGuess) {
      alert(`You've already tried the number ${userGuess}. Please try a new number!`);
      prevGuessUsed = true;
    }
  }
  if (prevGuessUsed) {
    i--;
  // Main block - Tell user if correct or too high or too low
  } else if (userGuess === randomNumber) {
    correctAnswers++;
    alert(`${userName} you guessed correctly!`);
    break;
  } else if (!prevGuessUsed && userGuess < randomNumber) {
    alert(`${userName} you're guess it too low!`);
  } else if (!prevGuessUsed && userGuess > randomNumber) {
    alert(`${userName} you're guess it too high!`);
  }

  // Push guess to previous guesses list
  previousGuesses.push(userGuess);

  // If user runs out of guesses inform them and show the correct answer
  if(i === 3){
    alert(`${userName} you're out of guesses.\nThe correct number was ${randomNumber}!`);
  }
}

// Ask Question #7 - A question that has multiple possible correct answers that are stored in an array.
var answers = ['AFRICAN OR EUROPEAN?', '24 MILES PER HOUR', '24MPH', '11 METERS PER SECOND', '11MPS', '38.6KM/H', '38.6 KILOMETERS PER HOUR'];

// Store boolean for if answered correctly.
var answeredCorrectly = false;

for (let i = 0; i < 6; i++) {
  // Send Prompt Every Loop
  var airSpeedAnswer = prompt(`${userName} what is the airspeed velocity of an unladen swallow?\nThis questions is NOT in a 'Yes' / 'No' or 'Y' / 'N' format`).toUpperCase();

  // Set Answered Correctly to false
  answeredCorrectly = false;

  // Loop through possible answers
  for (var j = 0; j < answers.length; j++) {
    if (airSpeedAnswer === answers[j]) {
      answeredCorrectly = true;
    }
  }

  if (answeredCorrectly) {
    correctAnswers++;
    alert(`${userName}, how do you know so much about swallows?`);
    break;
  } else {
    alert(`${userName}, that is incorrect.\nGuesses remaining ${5-i}`);
  }

  if(answeredCorrectly || i === 5) {
    alert(`${userName}, the answers are:\n${answers}!`);
  }
}

// Return User Score in Alert
alert(`${userName}, your score is: ${correctAnswers} / 7`);
