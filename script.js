const userScore = 0;
const computerScore = 0;
const userScore_div = document.getElementById("userscore");
const computerScore_div = document.getElementById("computerscore");
const rock_button = document.getElementById("rock");
const paper_button = document.getElementById("paper");
const scissors_button = document.getElementById("scissors");

function gamePlay(userSelection){
    const computerChoice = computerSelection();
    
    //Update text
   const winner = document.querySelector('.winner');
   //Check selections
    if(userSelection == computerChoice){
        winner.textContent = "DRAWWWWWWW!";
        return;
    } if (userSelection == "Rock" && computerChoice == "Paper"){
        winner.textContent = "Seriously? Computer choose Paper... TRY AGAIN!"
        return;
    } if (userSelection == "Scissors" && computerChoice == "Rock"){
        winner.textContent = "Come on! Computer choose Rock... TRY AGAIN!"
        return;
    } if (userSelection == "Paper" && computerChoice == "Scissors"){
        winner.textContent = "Oh my god... Computer choose Scissors... TRY AGAIN!"
        return;
    } if (userSelection == "Rock" && computerChoice == "Scissors"){
        winner.textContent = "AMAZING! Computer choose Scissors and you win!"
        return;
    } if (userSelection == "Scissors" && computerChoice == "Paper"){
        winner.textContent = "INCREDIBLE! Computer choose Paper and you win!"
        return;
    } if (userSelection == "Paper" && computerChoice == "Rock"){
        winner.textContent = "OK! Computer choose Rock and you win!"
        return;
    }  
}

function playerSelection(){
   
    rock_button.addEventListener("click", function(){
     gamePlay("Rock");
   })
    paper_button.addEventListener("click", function(){
   gamePlay("Paper");
   })
    scissors_button.addEventListener("click", function(){
   gamePlay("Scissors");
   })    
}

function computerSelection(){
        let options = ["Rock", "Paper", "Scissors"];
        let random = Math.floor(Math.random()*(options.length));
        return options[random];
}

gamePlay();
playerSelection();
computerSelection();

