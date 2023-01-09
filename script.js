// Get players choice
function getPlayerChoice(){
    let playerChoice = prompt("Choose your weapon: Rock, Paper or Scissors? ");
    let capitalizedPlayerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase();
    return capitalizedPlayerChoice;
}
// Get computers choice
function getComputerChoice(){
    let randomInt = Math.floor(Math.random() * (3)+1);
    switch (randomInt){
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
    }
}
// Compare choices
function compareChoices(playerChoice, computerChoice){
    console.log(`Your choice: ${playerChoice} - Computer's choice: ${computerChoice}`);
    if (playerChoice == computerChoice){
        return "tie";
    } else if (
        (playerChoice == "Rock" && computerChoice == "Scissors") ||
        (playerChoice == "Scissors" && computerChoice == "Paper") ||
        (playerChoice == "Paper" && computerChoice == "Rock")
    ) {
        return "win";
    } else if (
        (playerChoice == "Rock" && computerChoice == "Paper") ||
        (playerChoice == "Scissors" && computerChoice == "Rock") ||
        (playerChoice == "Paper" && computerChoice == "Scissors")
    ) {
        return "lose";
    }
}
//userCounter and computerCounter
//Bo5 loop if a player wins 3 rounds it's over