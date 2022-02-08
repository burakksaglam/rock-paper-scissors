const button_1 = document.querySelector('#b-1');
const button_2 = document.querySelector('#b-2');
const button_3 = document.querySelector('#b-3');

button_1.textContent = "rock";
button_2.textContent = "paper";
button_3.textContent = "scissors";

button_1.addEventListener('click', () => playRound("rock"));
button_2.addEventListener('click', () => playRound("paper"));
button_3.addEventListener('click', () => playRound("scissors"));







