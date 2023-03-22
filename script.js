function getComputerChoice() {
    const choices = ["rock", "scissors", "paper"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    /*console.log(randomIndex);*/
    return choices[randomIndex];
}

const choice = getComputerChoice();
//console.log(choice);

//let playerSelection = prompt("enter your choice",);
let computerSelection = getComputerChoice();

function oneRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "it's a tie";
    }
    else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }

}

//const result = oneRound(playerSelection, computerSelection);
//console.log(result);


function game() {
    console.log("this is a 5 round game");
    for (i = 0; i < 5; i++) {
        console.log(`round ${i}`);
        let playerSelection = prompt("enter your choice",);
        let computerSelection = getComputerChoice();
        const result = oneRound(playerSelection, computerSelection);
        console.log(result);

    }
}

game();