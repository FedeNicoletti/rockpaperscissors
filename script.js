let userScore = 0;
let computerScore = 0;
const userScore_p = document.getElementById("userscore");
const computerScore_p = document.getElementById("computerscore");
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
        computerScore++;
        userScore_p.textContent = userScore;
        computerScore_p.textContent = computerScore;
        return;
    } if (userSelection == "Scissors" && computerChoice == "Rock"){
        winner.textContent = "Come on! Computer choose Rock... TRY AGAIN!"
        computerScore++;
        userScore_p.textContent = userScore;
        computerScore_p.textContent = computerScore;
        return;
    } if (userSelection == "Paper" && computerChoice == "Scissors"){
        winner.textContent = "Oh my god... Computer choose Scissors... TRY AGAIN!"
        computerScore++;
        userScore_p.textContent = userScore;
        computerScore_p.textContent = computerScore;
        return;
    } if (userSelection == "Rock" && computerChoice == "Scissors"){
        winner.textContent = "AMAZING! Computer choose Scissors and you win!"
        userScore++;
        userScore_p.textContent = userScore;
        computerScore_p.textContent = computerScore;
        return;
    } if (userSelection == "Scissors" && computerChoice == "Paper"){
        winner.textContent = "INCREDIBLE! Computer choose Paper and you win!"
        userScore++;
        userScore_p.textContent = userScore;
        computerScore_p.textContent = computerScore;
        return;
    } if (userSelection == "Paper" && computerChoice == "Rock"){
        winner.textContent = "OK! Computer choose Rock and you win!"
        userScore++;
        userScore_p.textContent = userScore;
        computerScore_p.textContent = computerScore;
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

