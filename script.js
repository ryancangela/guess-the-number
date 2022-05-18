'use strict';

// Retry Btn - refresh window
// function refreshPage(){
//     window.location.reload();
//     refreshButton.addEventListener('click', refreshPage)
// } 

// Generating Random Secret Number
const secretNumber = Math.trunc(Math.random()*20)




// check input box
document.querySelector(`.guess`).addEventListener(`click`, function() {
const guess = Number(document.querySelector(`.guess`).value);
console.log(guess, typoeof);

if (!guess) {
  document.querySelector(`.message`).textContent = `no number`
} else if (guess === secretNumber) {
  document.querySelector(`.message`).textContent = `correct number`
} else if (guess > secretNumber) {
  document.querySelector(`.message`).textContent = `too high`
} else if (guess < secretNumber) {
  document.querySelector(`.message`).textContent = `too low`
}
