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
    playerSelectionDisplay.textContent = playerChoice;
    computerSelectionDisplay.textContent = computerChoice;

    if (playerChoice == computerChoice){
        infoWinLoseText.textContent = `It's a tie!`;
        infoFinishedGameText.textContent = `-- ${playerChoice} equals ${computerChoice} --`;
        return "Tie";
    } else if (
        (playerChoice == "Rock" && computerChoice == "Scissors") ||
        (playerChoice == "Scissors" && computerChoice == "Paper") ||
        (playerChoice == "Paper" && computerChoice == "Rock")
    ) {
        infoWinLoseText.textContent = `You Win!`;
        infoFinishedGameText.textContent = `-- ${playerChoice} beats ${computerChoice} --`;
        return "Win";
    } else if (
        (playerChoice == "Rock" && computerChoice == "Paper") ||
        (playerChoice == "Scissors" && computerChoice == "Rock") ||
        (playerChoice == "Paper" && computerChoice == "Scissors")
    ) {
        infoWinLoseText.textContent = `You lose!`;
        infoFinishedGameText.textContent = `-- ${playerChoice} is beaten by ${computerChoice} --`;
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
    playerScore.textContent = `Player wins: ${userWinCount}`;
    computerScore.textContent = `Computer wins: ${computerWinCount}`;

    //Stop set when a player has won 3 games
    if (userWinCount == 3 || computerWinCount == 3) {
        infoFinishedGameText.textContent = 'BEST OF 5 FINISHED!\nPLAY AGAIN!!';
        
        /*
            Ask for user input to play again. New popup button:
            newButton.addEventListener('click', playAgain);
        */
       playAgain();

    };
    
};



const weapons = document.querySelectorAll('kbd');
const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');
const infoWinLoseText = document.querySelector('.infoText h3');
const infoFinishedGameText = document.querySelector('.infoText p');
const playerSelectionDisplay = document.querySelector('#playerSelectionDisplay h2');
const computerSelectionDisplay = document.querySelector('#computerSelectionDisplay h2');


let userWinCount = 0;
let computerWinCount = 0;

weapons.forEach(weapon => {
    weapon.addEventListener('click', playRound)
});
