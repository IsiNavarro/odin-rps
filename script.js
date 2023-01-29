function getPlayerChoice(e){
    const playerChoice = `${e.target.innerHTML}`;
    return playerChoice;
};

function getComputerChoice(){
    let randomInt = Math.floor(Math.random() * (3)+1);
    switch (randomInt){
        case 1:
            return "✊";
        case 2:
            return "✋";
        case 3:
            return "✌";
    }
};

function compareChoices(playerChoice, computerChoice){
    playerSelectionDisplay.textContent = playerChoice;
    computerSelectionDisplay.textContent = computerChoice;

    if (playerChoice == computerChoice){
        infoWinLoseText.textContent = `It's a tie!`;    
        return "Tie";
    } else if (
        (playerChoice == "✊" && computerChoice == "✌") ||
        (playerChoice == "✌" && computerChoice == "✋") ||
        (playerChoice == "✋" && computerChoice == "✊")
    ) {
        infoWinLoseText.textContent = `You Win!`;
        return "Win";
    } else if (
        (playerChoice == "✊" && computerChoice == "✋") ||
        (playerChoice == "✌" && computerChoice == "✊") ||
        (playerChoice == "✋" && computerChoice == "✌")
    ) {
        infoWinLoseText.textContent = `You lose!`;
        return "Lose";
    }
};

function playAgain(){
    userWinCount = 0;
    computerWinCount = 0;
};

function playRound(e){
    infoFinishedGameText.textContent = 'First to score 3 points wins the game.'
    const playerChoice = getPlayerChoice(e);
    const computerChoice = getComputerChoice();

    let roundResult = compareChoices(playerChoice, computerChoice);

    if (roundResult == "Win"){
        userWinCount+=1;
    } else if (roundResult == "Lose"){
        computerWinCount+=1;
    }
    playerScore.textContent = `Player: ${userWinCount}`;
    computerScore.textContent = `Computer: ${computerWinCount}`;

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
