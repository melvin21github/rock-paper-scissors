function getComputerChoice(){
    const choices = ["rock","scissors","paper"];
    const randomIndex =Math.floor( Math.random()* choices.length);
    /*console.log(randomIndex);*/
    return choices[randomIndex];
}

const choice = getComputerChoice();
console.log(choice);