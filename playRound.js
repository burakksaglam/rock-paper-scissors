const result = document.getElementById("result");

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay().toLowerCase();
    result.innerHTML = playerSelection + " " + computerSelection + "<br/>";

    if (playerSelection == "rock" && computerSelection == "paper") {
        computerScore++;
        result.innerHTML += "You lose! Paper beats Rock";
        result.innerHTML += "<br/>" + "playerScore: " + playerScore + " " + "computerScore: " + computerScore;
    } 
    
    else if (playerSelection == "paper" && computerSelection == "rock") {
        playerScore++;
        result.innerHTML += "You won! Paper beats Rock";
        result.innerHTML += "<br/>" + "playerScore: " + playerScore + " " + "computerScore: " + computerScore;
    } 
    
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore++;
        result.innerHTML += "You won! Scissors beats Paper";
        result.innerHTML += "<br/>" + "playerScore: " + playerScore + " " + "computerScore: " + computerScore;
    } 
    
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerScore++;
        result.innerHTML += "You lose! Scissors beats Paper";
        result.innerHTML += "<br/>" + "playerScore: " + playerScore + " " + "computerScore: " + computerScore;
    } 
    
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerScore++;
        result.innerHTML += "You lose! Rock beats Scissors";
        result.innerHTML += "<br/>" + "playerScore: " + playerScore + " " + "computerScore: " + computerScore;
    } 
    
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore++;
        result.innerHTML += "You won! Rock beats Scissors";
        result.innerHTML += "<br/>" + "playerScore: " + playerScore + " " + "computerScore: " + computerScore;
    } 
    
    else if (playerSelection == computerSelection) {
        result.innerHTML += "It's a draw! Let's try again";
        
    } 


    if(playerScore == 5) {
        playerScore = 0;
        computerScore = 0;
        result.innerHTML += "<br/>" + "You won!";
    }

    else if(computerScore == 5) {
        playerScore = 0;
        computerScore = 0;
        result.innerHTML += "<br/>" + "Computer won!";
    }
    

}