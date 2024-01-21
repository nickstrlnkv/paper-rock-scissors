let choice = ["paper", "rock", "scissors"]
let divResults = document.querySelector(".results")
let choices = [];
let bestOfFive = 0;

function getComputerChoice() {
    return choice[Math.floor(Math.random() * 3)];
}



function gameResult(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection == "paper") {
        if (computerSelection == "paper") {

            // Adding result to html document.
            const content =  document.createElement('p');
            content.classList.add('content');
            content.textContent = `Round №${choices.length + 1} It's draw!`;
            divResults.appendChild(content);

            console.log("It's draw!");
            return 0;
        }
        else if (computerSelection == "rock") {

            // Adding result to html document.
            const content = document.createElement('p');
            content.classList.add('content');
            content.textContent = `Round №${choices.length + 1} Congratulations! The computer choice ${computerSelection}`;
            divResults.appendChild(content);

            console.log(`Congratulations! The computer choice ${computerSelection}`);
            return 1;
        }
        else {

            // Adding result to html document.
            const content = document.createElement('p');
            content.classList.add('content');
            content.textContent = `Round №${choices.length + 1} You lose! The computer choice ${computerSelection}`;
            divResults.appendChild(content);

            console.log(`You lose! The computer choice ${computerSelection}`);
            return -1;
        }
    }
    else if (playerSelection == "rock") {
        if (computerSelection == "rock") {

            // Adding result to html document.
            const content =  document.createElement('p');
            content.classList.add('content');
            content.textContent = `Round №${choices.length + 1} It's draw!`;
            divResults.appendChild(content)

            console.log("It's draw!");
            return 0;
        }
        else if (computerSelection == "scissors") {

            // Adding result to html document.
            const content = document.createElement('p');
            content.classList.add('content');
            content.textContent = `Round №${choices.length + 1} Congratulations! The computer choice ${computerSelection}`;
            divResults.appendChild(content);

            console.log(`Congratulations! The computer choice ${computerSelection}`);
            return 1;
        }
        else { 

            // Adding result to html document.
            const content = document.createElement('p');
            content.classList.add('content');
            content.textContent = `Round №${choices.length + 1} You lose! The computer choice ${computerSelection}`;
            divResults.appendChild(content);

            console.log(`You lose! The computer choice ${computerSelection}`);
            return -1;
        }
    }
    else if (playerSelection == "scissors") {
        if (computerSelection == "scissors") {
            
            // Adding result to html document.
            const content =  document.createElement('p');
            content.classList.add('content');
            content.textContent = `Round №${choices.length + 1} It's draw!`;
            divResults.appendChild(content)

            console.log("It's draw!");
            return 0;
        }
        else if (computerSelection == "paper") {

            // Adding result to html document.
            const content = document.createElement('p');
            content.classList.add('content');
            content.textContent = `Round №${choices.length + 1} Congratulations! The computer choice ${computerSelection}`;
            divResults.appendChild(content);

            console.log(`Congratulations! The computer choice ${computerSelection}`);
            return 1;
        }
        else {

            // Adding result to html document.
            const content = document.createElement('p');
            content.classList.add('content');
            content.textContent = `Round №${choices.length + 1} The computer choice ${computerSelection}`;
            divResults.appendChild(content);

            console.log(`You lose! The computer choice ${computerSelection}`);
            return -1;
        }
    }
    else
        console.log("Error! Maybe you write a wrong. Try again!");
}

const buttons = document.querySelectorAll('#choice');
const div = document.querySelector('.results');
const resultButton = document.querySelector('#result');


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        choices.length < 5 ? choices.push(gameResult(button.textContent, getComputerChoice())) : alert("You're already played 5 rounds");

    });
});
resultButton.addEventListener('click', () => {
    game();
})



function game() {
    let countPlayerWon = 0;
    let countComputerWon = 0;
    

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

       const content = document.createElement('h1');
       content.classList.add('content');
       content.textContent = `Game over! The result is draw!`;
       divResults.appendChild(content);
        console.log("It's draw!");
    }
    else if (countPlayerWon < countComputerWon) {
        const content = document.createElement('h1');
       content.classList.add('content');
       content.textContent = `Game over! You lose in best of five!`;
       divResults.appendChild(content);
        console.log("You lose in best of five!");
    }
    else {
        const content = document.createElement('h1');
       content.classList.add('content');
       content.textContent = `Game over! You won in best of five!`;
       divResults.appendChild(content);
        console.log("You won in best of five!");
    }
}
