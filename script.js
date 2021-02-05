function playRound(playerSelection, computerSelection){
   
    if(playerSelection == computerSelection){
        return ("It's a tie!");
    } if (playerSelection == "Rock" && computerSelection == "Paper"){
        return ("Computer choose Paper and wins... Try again!" )
    } if (playerSelection == "Scissors" && computerSelection == "Rock"){
        return ("Computer choose Rock and wins... Try again!" )
    } if (playerSelection == "Paper" && computerSelection == "Scissors"){
        return ("Computer choose Scissors and wins... Try again!" )
    } if (playerSelection == "Rock" && computerSelection == "Siccors"){
        return ("Congrats! Computer choose Scissors and you wins!" )
    } if (playerSelection == "Scissors" && computerSelection == "Paper"){
        return ("Congrats! Computer choose Paper and you wins!" )
    } if (playerSelection == "Paper" && computerSelection == "Rock"){
        return ("Congrats! Computer choose Rock and you wins!" )
    }
}

function playerSelection(){
    let options = ["Rock", "Paper", "Scissors"];
        let random = Math.floor(Math.random()*(options.length));
        let selection = options[random];
        return(selection);
}

function computerSelection(){
        let options = ["Rock", "Paper", "Scissors"];
        let random = Math.floor(Math.random()*(options.length));
        let selection = options[random];
        return(selection);
}

const playerPlay =  playerSelection();
const computerPlay = computerSelection();
console.log(playRound(playerPlay, computerPlay));
