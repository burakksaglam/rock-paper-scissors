function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("Player's selection is: ").toLowerCase();
    computerSelection = computerPlay().toLowerCase();
    console.log(playerSelection, computerSelection);

    if(playerSelection == "rock" && computerSelection == "paper") {
        console.log("You lose! Paper beats Rock");
        return "You lose! Paper beats Rock";
    }

    else if(playerSelection == "paper" && computerSelection == "rock") {
        console.log("You won! Paper beats Rock");
        return "You won! Paper beats Rock";
    }

    else if(playerSelection == "scissors" && computerSelection == "paper") {
        console.log("You won! Scissors beats Paper");
        return "You won! Scissors beats Paper";
    }

    else if(playerSelection == "paper" && computerSelection == "scissors") {
        console.log("You lose! Scissors beats Paper");
        return "You lose! Scissors beats Paper";
    }

    else if(playerSelection == "scissors" && computerSelection == "rock") {
        console.log("You lose! Rock beats Scissors");
        return "You lose! Rock beats Scissors";
    }

    else if(playerSelection == "rock" && computerSelection == "scissors") {
        console.log("You won! Rock beats Scissors");
        return "You won! Rock beats Scissors";
    }

    else {
        console.log("Wrong command! Please try again.");
        return playRound(playerSelection, computerSelection);
    }

}