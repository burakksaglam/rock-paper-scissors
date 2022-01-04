function game() {
    let win = 0;
    let lose = 0;
    let temporaryVariable;

    for(let i = 1; i <= 5; i++) {
        temporaryVariable = playRound();
        if(temporaryVariable[4] == "w") {
            win++;
        }

        else if(temporaryVariable[4] == "l") {
            lose++;
        }
    }

    console.log("win: ", win, "lose: ", lose);


}