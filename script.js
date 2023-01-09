function getPlayerChoice(){
    let playerChoice = prompt("Choose your weapon: Rock, Paper or Scissors? ");
    let capitalizedPlayerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase();
    return capitalizedPlayerChoice;
}

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

function compareChoices(playerChoice, computerChoice){
    console.log(`Your choice: ${playerChoice} - Computer's choice: ${computerChoice}`);
    if (playerChoice == computerChoice){
        console.log(`It's a tie!`);
        return "Tie";
    } else if (
        (playerChoice == "Rock" && computerChoice == "Scissors") ||
        (playerChoice == "Scissors" && computerChoice == "Paper") ||
        (playerChoice == "Paper" && computerChoice == "Rock")
    ) {
        console.log(`You Win!`);
        return "Win";
    } else if (
        (playerChoice == "Rock" && computerChoice == "Paper") ||
        (playerChoice == "Scissors" && computerChoice == "Rock") ||
        (playerChoice == "Paper" && computerChoice == "Scissors")
    ) {
        console.log(`You lose!`);
        return "Lose";
    }
}

function playRound(){
    return compareChoices(getPlayerChoice(), getComputerChoice());
}

function playSet(){
    let userWinCount = 0;
    let computerWinCount = 0;
    let roundNumber = 1;

    while (userWinCount <3 && computerWinCount <3){

        console.log(`ROUND NUMBER: ${roundNumber}`);

        let roundResult = playRound();

        if (roundResult == "Win"){
            userWinCount+=1;
        } else if (roundResult == "Lose"){
            computerWinCount+=1;
        }
        console.log(`USER WINS: ${userWinCount} - ${computerWinCount} :COMPUTER WINS`);
        console.log("");
        roundNumber+=1;
        }
    let winner;
    if (userWinCount == 3){winner="user"}
    else{winner="computer"}

    console.log(`GAME FINISHED ${winner} WINS!`);
}



playSet();