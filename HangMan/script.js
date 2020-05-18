const wordEl = document.getElementById('word'),
    wrongLettersEl = document.getElementById('wrong-letters'),
    playAgainBtn = document.getElementById('play-again'),
    popup = document.getElementById('popup-contiainer'),
    notifocation = document.getElementById('notifcation-container'),
    finalMessage = document.getElementById('final-message');

const figureParts = document.querySelectorAll('.figure-part');

const words = ['Mother', 'Father', 'Brother', 'Friend'];

let selectedWord = words[Math.floor(Math.random() * words.length)];

const correctLetters = [];
const wrongLetters = [];

//Show hidden Word
function displayWord() {
    wordEl.innerHTML = `
        ${selectedWord
            .split('')
            .map(
                (letter) =>
                    `<span class="letter">${
                        correctLetters.includes(letter) ? letter : ''
                    }</span>`
            )
            .join('')}
    `;

    console.log(wordEl.innerText);
}

displayWord();
