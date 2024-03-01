// Generate a random number and assign it to the randomNumber variable
let randomNumber = parseInt(Math.random() * 100 + 1);

// Add missing semicolons at the end of each statement for consistency
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessfield');
const guessSlot = document.querySelector('.guesses');
const remaing = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

// Use isNaN(guess) to check if the input is not a number
if (playGame) {
    submit.addEventListener('click', function(e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    });
}

function validateGuess(guess){
    // Change the condition to check if guess is not a number
    if(isNaN(guess)){
        alert('Please enter a valid number');
    } else if(guess < 1 || guess > 100){
        alert('Please enter a valid number between 1 and 100');
    } else {
        prevGuess.push(guess);
        if(numGuess === 10){
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    // Change the conditions to compare guess with randomNumber using < and > operators
    if(guess === randomNumber){
        displayMessage('You guessed it right');
        endGame();
    } else if (guess < randomNumber){
        displayMessage(`Number is too low`);
    } else if(guess > randomNumber){
        displayMessage(`Number is too high`);
    }
}

function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess} `;
    numGuess++;
    remaing.innerHTML = `${10 - numGuess}`;
}

function displayMessage(message){
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
  }
  
  function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
      randomNumber = parseInt(Math.random() * 100 + 1);
      prevGuess = [];
      numGuess = 1;
      guessSlot.innerHTML = '';
      remaining.innerHTML = `${11 - numGuess} `;
      userInput.removeAttribute('disabled');
      startOver.removeChild(p);
  
      playGame = true;
    });
  }