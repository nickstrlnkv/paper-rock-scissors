choice = ["paper", "rock", "scissors"]

function getComputerChoice() {
    return choice[Math.floor(Math.random() * 3)];
}


function getPlayerChoice() {
    let playerChoice = prompt("Choice your item (paper, rock, scissors): ");
    return playerChoice;
}

function gameResult(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection == "paper") {
        if (computerSelection == "paper") {
            console.log("It's draw!");
            return 0;
        }
        else if (computerSelection == "rock") {
            console.log(`Congratulations! The computer choice ${computerSelection}`);
            return 1;
        }
        else {
            console.log(`You lose! The computer choice ${computerSelection}`);
            return -1;
        }
    }
    else if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            console.log("It's draw!");
            return 0;
        }
        else if (computerSelection == "scissors") {
            console.log(`Congratulations! The computer choice ${computerSelection}`);
            return 1;
        }
        else { 
            console.log(`You lose! The computer choice ${computerSelection}`);
            return -1;
        }
    }
    else if (playerSelection == "scissors") {
        if (computerSelection == "scissors") {
            console.log("It's draw!");
            return 0;
        }
        else if (computerSelection == "paper") {
            console.log(`Congratulations! The computer choice ${computerSelection}`);
            return 1;
        }
        else {
            console.log(`You lose! The computer choice ${computerSelection}`);
            return -1;
        }
    }
    else
        console.log("Error! Maybe you write a wrong. Try again!");
}

function game() {
    let bestOfFive = 0;
    let choices = [];
    let countPlayerWon = 0;
    let countComputerWon = 0;
    while (bestOfFive != 5) {
        choices.push(gameResult(getPlayerChoice(), getComputerChoice()));
        bestOfFive++;
        console.log(choices);
    }

    for (let i = 0; i < choices.length; i++) {
        if (choices[i] == 1) {
            countPlayerWon++;
        }
    }

    for (let i = 0; i < choices.length; i++) {
        if (choices[i] == -1) {
            countComputerWon++;
        }
    }

    if (countPlayerWon == countComputerWon) {
        console.log("It's draw!");
    }
    else if (countPlayerWon < countComputerWon) {
        console.log("You lose in best of five!");
    }
    else {
        console.log("You won in best of five!");
    }

}

game();