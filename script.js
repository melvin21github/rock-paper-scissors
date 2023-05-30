function getComputerChoice() {
    const choices = ["rock", "scissors", "paper"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    //console.log(randomIndex);
    return choices[randomIndex];
}

//const choice = getComputerChoice();
//console.log(choice);

//let playerSelection = prompt("enter your choice",);
//let computerSelection = getComputerChoice();

function oneRound(playerSelection, computerSelection) {
    //playerSelection = playerSelection.toLowerCase();
    //console.log(playerSelection);
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


/*function game() {
    console.log("this is a 5 round game");
    for (i = 0; i < 5; i++) {
        console.log(`round ${i}`);
        let playerSelection = prompt("enter your choice",);
        let computerSelection = getComputerChoice();
        const result = oneRound(playerSelection, computerSelection);
        console.log(result);

    }
}

game();*/

//adding buttons 

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
//console.log(rock);

rock.addEventListener('click', () =>{
    let playerSelection = 'rock';
    //console.log(playerSelection);
    playerChoice.textContent='you chose :rock';
    let computerSelection = getComputerChoice();
    compChoice.textContent=`the computer chose :${computerSelection}`;
    const result1 = oneRound(playerSelection,computerSelection);
    //console.log(result1);
    result.textContent = `the outcome of the round:${result1}`;
});

paper.addEventListener('click', () =>{
    let playerSelection = 'paper';
    //console.log(playerSelection);
    playerChoice.textContent='you chose: paper';
    let computerSelection = getComputerChoice();
    compChoice.textContent=`the computer chose :${computerSelection}`;
    const result1 = oneRound(playerSelection,computerSelection);
    //console.log(result1);
    result.textContent = `the outcome of the round:${result1}`;
});

scissors.addEventListener('click', () =>{
    let playerSelection = 'scissors';
    //console.log(playerSelection);
    playerChoice.textContent='you chose :scissors';
    let computerSelection = getComputerChoice();
    compChoice.textContent=`the computer chose :${computerSelection}`;
    const result1 = oneRound(playerSelection,computerSelection);
    //console.log(result1);
    result.textContent = `the outcome of the round:${result1}`;
});

const result = document.createElement('div');
result.classList.add('result');
//result.textContent = `the outcome of the round:`;
const outcome = document.querySelector('#outcome');
outcome.appendChild(result);

const playerChoice= document.getElementById('playerChoice');
const compChoice= document.getElementById('compChoice');