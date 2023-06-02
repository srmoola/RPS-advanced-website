const playerText = document.getElementById("playerText");
const computerText = document.getElementById("computerText");
const resultText = document.getElementById("resultText");
const playerBox = document.getElementById("playerBox");
const computerBox = document.getElementById("computerBox");
const computerImage = document.getElementById("computerImage")
const gameScreen = document.getElementById("gamescreen");
const winScreen = document.getElementById("winscreen");
const winText = document.getElementById("winText");
const playerImage = document.getElementById("playerImage")
const userName = document.getElementById("userName");
const userMaxScore = document.getElementById("maxScore");
const nameRequired = document.getElementById("nameRequired");
const scoreRequired = document.getElementById("scoreRequired");
const computerSwitch = ["rock", "paper", "scissors"];

let maxScore = 0;
let playerName = "";
let computerScore = 0;
let playerScore = 0;

function game(playerChoice) {

    resultText.style.display = "none";
    computerSelection = computerChoice();
    computerSelection = computerSwitch[computerSelection];
    computerImage.src = "images/" + computerSelection + ".png";
    let playerSelection = playerChoice;
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection == computerSelection) {
        resultText.innerText = "It's a tie!"
        resultText.style.display = "block";
    }
    else if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "paper" ||
        playerSelection == "paper" && computerSelection == "rock") {
        playerScore++;
        resultText.innerText = "You won!"
        resultText.style.display = "block";
        playerText.innerText = playerName + ": " + playerScore;

    } else {
        computerScore++;
        resultText.innerText = "You Lose!"
        resultText.style.display = "block";
        computerText.innerText = "Computer: " + computerScore;
    }


    if (playerScore >= maxScore) {
        gameScreen.remove();
        winText.innerText = "You Win!";
        winScreen.style.display = "block";
    } else if (computerScore >= maxScore) {
        gameScreen.remove();
        winText.innerText = "You Lose!";
        winScreen.style.display = "block";
    }

}



function chooseRock() {
    playerImage.src = "images/rock.png";
    game("rock");
}

function choosePaper() {
    playerImage.src = "images/paper.png";
    game("paper");
}

function chooseScissors() {
    playerImage.src = "images/scissors.png";
    game("scissors");
}


function computerChoice() {
    const random = Math.floor((Math.random() * 3));
    return random;
}

function getInfo() {
    var playersName = userName.value;
    var playerMaxScore = userMaxScore.value;

    if ((playersName == null || playersName == "") || (playerMaxScore == null || playerMaxScore == "")) {
        userName.style.border = "solid red 2px";
        userMaxScore.style.border = "solid red 2px";
        nameRequired.style.display = "inline-block";
        scoreRequired.style.display = "inline-block";
        return false;
    } else if (playerMaxScore < 1) {
        scoreRequired.innerText = "*has to be greater than 0"
        scoreRequired.style.display = "inline-block";
        return false;
    }

    maxScore = playerMaxScore;
    playerName = playersName;
    document.getElementById("userInfo").remove();
    playerText.innerText = playerName + ": " + playerScore
    gameScreen.style.display = "block";
}