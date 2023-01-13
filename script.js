function getPlayerChoice(e){
    const playerChoice = `${e.target.innerHTML}`;
    return playerChoice;
};

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
};

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
};

function playAgain(){
    userWinCount = 0;
    computerWinCount = 0;
};

function playRound(e){
    const playerChoice = getPlayerChoice(e);
    const computerChoice = getComputerChoice();

    let roundResult = compareChoices(playerChoice, computerChoice);

    if (roundResult == "Win"){
        userWinCount+=1;
    } else if (roundResult == "Lose"){
        computerWinCount+=1;
    }
    console.log(`USER WINS: ${userWinCount} - ${computerWinCount} :COMPUTER WINS`);

    //Stop set when a player has won 3 games
    if (userWinCount == 3 || computerWinCount == 3) {
        console.log('Bo5 Finished\n\n\n\n\n');
        
        /*
            Ask for user input to play again. New popup button:
            newButton.addEventListener('click', playAgain);
        */
       playAgain();

    };
    
};



// playSet();
const weapons = document.querySelectorAll('kbd');

let userWinCount = 0;
let computerWinCount = 0;

weapons.forEach(weapon => {
    weapon.addEventListener('click', playRound)
});
