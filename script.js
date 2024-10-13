let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    const randomValue = parseInt(Math.random() * (3 - 0) + 0);

    console.log(randomValue)
    
    if(randomValue == 2){
        return "rock";
    }else if (randomValue == 1){
        return "paper";
    }else{
        return "scissor";
    }  
    
}

function getHumanChoice(userprompt){
    let userchoice = prompt("What is your play rock, paper or scissor").trim().toLowerCase();

    if(userchoice === "rock"){
        return "rock";
    }else if(userchoice === "paper"){
        return "paper";
    }else if(userchoice === "scissor"){
        return "scissor";
    }else{
        return "sorry those are not the choices "
    }

}

function playRound(humanChoice, computerChoice){
    console.log(computerChoice);
    let humanAnswer =humanChoice;
    let computerAnswer =computerChoice;

    if(humanAnswer === "rock" && computerAnswer === "paper" )
    {
            console.log("You lose! Paper beats Rock")
            computerScore = computerScore + 1
    }
    else if( humanAnswer === "rock" && computerAnswer === "scissor")
    {
            console.log("You win! Rock beats Scissor")
            humanScore = humanScore + 1
    }
    else if( humanAnswer === "rock" && computerAnswer === "rock")
    {
            console.log("Draw!")
    }
    else if( humanAnswer === "paper" && computerAnswer === "scissor")
    {
            console.log("You lose! Scissor beats paper")
            computerScore = computerScore + 1
    }
    else if( humanAnswer === "paper" && computerAnswer === "rock")
    {
            console.log("You Win! Paper beats Rock")
            humanScore = humanScore + 1
    }
    else if( humanAnswer === "paper" && computerAnswer === "paper")
    {
            console.log("Draw!")
    }
    else if( humanAnswer === "scissor" && computerAnswer === "rock")
    {
            
            console.log("You lose! Rock beats Scissor")
            computerScore = computerScore + 1
    }
    else if( humanAnswer === "scissor" && computerAnswer === "paper")
    {
            
            console.log("You Win! Scissor beats Paper")
            humanScore = humanScore + 1
    }
    else
    {
        console.log("Draw!")
    }   

}

function playGame(){
    for(let i =0; i < 5; i++){
        playRound(getHumanChoice("Welcome to the Rock Paper Scissor Game"),getComputerChoice());
    }

    if(humanScore > computerScore){
         console.log("the winner is human");
    }

    if(computerScore > humanScore){
         console.log("the winner is computer");
    }

    if(computerScore === humanScore){
        console.log("Draw for all players");
   }
}

playGame();