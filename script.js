/*function playRound(playerSelection, computerSelection){
    //code
}

const playerSelection = "rock";
const computerSelection = computerPlay();
alert(playRound(playerSelection, computerSelection));
*/

let options = ["Rock", "Paper", "Scissors"];
let random = Math.floor(Math.random()*(options.length));
let selection = options[random];
console.log(selection);
