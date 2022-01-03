function computerPlay() {
    const shakeOptions = ["Rock", "Paper", "Scissors"];
    const shakeResult = shakeOptions[Math.floor(Math.random() * shakeOptions.length)];
    return shakeResult;
}