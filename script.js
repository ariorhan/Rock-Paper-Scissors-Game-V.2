const possibleChoices = document.querySelectorAll('button')
const playerChoiceDisplay = document.getElementById('player-choice')
const computerChoiceDisplay = document.getElementById('computer-choice')
const resultDisplay = document.getElementById('result')

let result
let playerChoice
let computerChoice
let playerScore = 0
let computerScore = 0
let img1 = document.createElement('img')
let img2 = document.createElement('img')


possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',(e) => {
    playerChoice = e.target.id     
    img1.src = playerChoice +".png"
    document.getElementById("player-id").appendChild(img1);
    // playerChoiceDisplay.innerHTML = playerChoice
    
    generateComputerChoice()
    getResults()
    changeBackground()
    
}))

function generateComputerChoice() {
    const item = ['rock', 'paper', 'scissors']
    computerChoice = item[Math.floor(Math.random()*item.length)]; 
    img2.src = computerChoice +".png"
    document.getElementById("computer-id").appendChild(img2);      
    // computerChoiceDisplay.innerHTML = computerChoice
    
}


function getResults() {
    if (playerChoice === "rock" && computerChoice === "paper") {
        result = 'You lost'
        computerScore++
        
    }
    if (playerChoice === "rock" && computerChoice === "scissors") {
        result = 'You won'
        playerScore++
    }
    if (playerChoice === "paper" && computerChoice === "scissors") {
        result = 'You lost'
        computerScore++
    }
    if (playerChoice === "paper" && computerChoice === "rock") {
        result = 'You won'
        playerScore++
    }
    if (playerChoice === "scissors" && computerChoice === "paper") {
        result = 'You won'
        playerScore++
    }
    if (playerChoice === "scissors" && computerChoice === "rock") {
        result = 'You lost'
        computerScore++
    }
    if (playerChoice === computerChoice) {
        result = 'Draw'
    }
    resultDisplay.innerHTML = result    
    document.getElementById('player-score').innerText = playerScore;
    document.getElementById('computer-score').innerText = computerScore; 
}

function changeBackground() {
    let changeResultBackground = document.querySelector(".rslt");
        
    if (result === 'You won') {
        changeResultBackground.style.backgroundColor = "green"
    } 
    if(result === 'You lost') {
        changeResultBackground.style.backgroundColor = "red"
    }
    if (result === 'Draw') {
        changeResultBackground.style.backgroundColor = "grey"
    }
}





  
