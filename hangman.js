const wordToGuess = "living room".toUpperCase();
let guessedWord = Array.from(wordToGuess).map(char => (char === ' ' ? ' ' : '_'));
let incorrectGuesses = 0;

const wordContainer = document.getElementById('word-container');
const hangmanImage = document.getElementById('hangman-image');
const lettersContainer = document.getElementById('letters');

function displayWord() {
  wordContainer.textContent = guessedWord.join(' ');
}

function displayHangman() {
  hangmanImage.style.backgroundImage = `url('hangman_${incorrectGuesses}.png')`;
}

function displayLetters() {
  lettersContainer.innerHTML = "";
  for (let i = 65; i <= 90; i++) {
    const letter = String.fromCharCode(i);
    const letterButton = document.createElement('div');
    letterButton.className = 'letter';
    letterButton.textContent = letter;
    letterButton.addEventListener('click', () => guessLetter(letter));
    lettersContainer.appendChild(letterButton);
  }
}

function guessLetter(letter) {
  if (wordToGuess.includes(letter)) {
    for (let i = 0; i < wordToGuess.length; i++) {
      if (wordToGuess[i] === letter) {
        guessedWord[i] = letter;
      }
    }
  } else {
    incorrectGuesses++;
  }

  displayWord();
  displayHangman();
  displayLetters();

  if (guessedWord.join('') === wordToGuess || incorrectGuesses === 6) {
    endGame();
  }
}

function endGame() {
  if (guessedWord.join('') === wordToGuess) {
    alert('Congratulations! You guessed the word.');
  } else {
    alert('Game over. The word was: ' + wordToGuess);
  }
  resetGame();
}

function resetGame() {
  guessedWord = Array.from(wordToGuess).map(char => (char === ' ' ? ' ' : '_'));
  incorrectGuesses = 0;
  displayWord();
  displayHangman();
  displayLetters();
}

// Initial setup
displayWord();
displayHangman();
displayLetters();
