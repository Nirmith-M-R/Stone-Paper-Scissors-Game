let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg")

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score")

const genCompChoice = () => {
    options = ['rock', 'paper', 'scissors']
    let randIdx = Math.floor(Math.random() * 3)
    return options[randIdx]
}

const drawGame = () => {
    console.log("Game is draw")
    msg.innerText = "Game was draw. Play again"
    msg.style.backgroundColor = "black"
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore
        console.log("You Win!");
        msg.innerText = `You Won!! Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "green"
    }else{
        compScore++;
        compScorePara.innerText = compScore
        console.log("Comp Win!")
        msg.innerText = `You Loose! ${compChoice} beats your ${userChoice}`
        msg.style.backgroundColor = "red"
    }
}

const playGame = (userChoice)=>{
    console.log("user Choice is ",userChoice)
    let compChoice = genCompChoice()
    console.log("Comp Choice is ",compChoice)

    if(userChoice === compChoice){
        //Draw Game
        drawGame();
    }else {
        let userWin = true
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true ;
        }else if(userChoice === "paper"){
            userWin = compChoice === "rock" ? true : false ;
        }else{
            userWin = compChoice === "rock" ? false : true ;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}


choices.forEach((choice)=>{
    console.log(choice)
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice)
    })
})