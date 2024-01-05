const computerChoiceDisplay = document.querySelector("#computer-choice");
const userChoiceDisplay = document.querySelector("#user-choice");
const resultDisplay = document.getElementById("result");

const possibleChoices = document.querySelectorAll("button");

let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',(e)=>{
  userChoice = e.target.id;
  userChoiceDisplay.innerHTML = userChoice;

  generateComputerChoice();
  getResult();
}))

function generateComputerChoice(){
  const randomNumber = Math.floor(Math.random()*3) + 1; // because we have only three options like: rock,paper and scissor otherwise you can use "(possibleChoices.length)"


  if(randomNumber === 1){
    computerChoice = "rock";
  }
  else if(randomNumber === 2){
    computerChoice = "paper";
  }
  else{
    computerChoice = "scissor";
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice === userChoice) {
    result = 'its a draw!'
  }
  if (computerChoice === 'rock' && userChoice === "paper") {
    result = 'you win!'
  }
  if (computerChoice === 'rock' && userChoice === "scissor") {
    result = 'you lost!'
  }
  if (computerChoice === 'paper' && userChoice === "scissor") {
    result = 'you win!'
  }
  if (computerChoice === 'paper' && userChoice === "rock") {
    result = 'you lose!'
  }
  if (computerChoice === 'scissor' && userChoice === "rock") {
    result = 'you win!'
  }
  if (computerChoice === 'scissor' && userChoice === "paper") {
    result = 'you lose!'
  }
  resultDisplay.innerHTML = result
}