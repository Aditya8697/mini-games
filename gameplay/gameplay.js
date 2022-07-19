console.log('Hello World');

// Variables 
const gameOptions = ['rock', 'paper', 'scissors', 'question-mark'];
const outcome = ['Player Won!', 'Opponent Won!', 'Draw!'];
const opponentsChoice = document.getElementById('opponents-choice');
const playersChoice = document.getElementById('player-choice');
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const playerWinDisplay = document.getElementById('player-win');
const drawsDisplay = document.getElementById('draws');
const roundDisplay = document.getElementById('total-round');
const opponentWinDisplay = document.getElementById('opponent-win');
const winnerDisplay = document.getElementById('winner');
const redirect = document.getElementById('redirect');
const header = document.getElementById('header');
const body = document.getElementById('body');

let playerOption, opponentOption
  , totalRounds = 0
  , playerWins = 0
  , opponentWins = 0
  , draws = 0
  , overallWinner;
  
 var maxRounds = 5;
 var playerName = 'Anonymous';

 maxRounds = localStorage.getItem('MAX$ROUNDS');
 playerName = localStorage.getItem('PLAYER$NAME');

// Variables End
// Gameplay
  // Gameplay Functions

function opponentMove() {
  let randomNumber = (Math.random() * 3);
  if (randomNumber >= 1 && randomNumber <= 2) {
    opponentsChoice.src='img/reverse/rock.png';
    console.log(randomNumber);
    return 'rock';
  }
  if (randomNumber >= 2 && randomNumber <= 3) {
    opponentsChoice.src='img/reverse/paper.png';
    console.log(randomNumber);
    return 'paper';
  } else {
    opponentsChoice.src='img/reverse/scissors.png';
    console.log(randomNumber);
    return 'scissors';
  }
}

function getWinner(pO, oO) {
  totalRounds++;
  switch (pO) {
    case 'rock':
      switch (oO) {
        case 'rock':
          draws++;
        return outcome[2];
        case 'paper':
          opponentWins++;
        return outcome[1];
        case 'scissors':
          playerWins++;
        return outcome[0];
      };
    case 'paper':
      switch (oO) {
        case 'rock':
          playerWins++;
        return outcome[0];
        case 'paper':
          draws++;
        return outcome[2];
        case 'scissors':
          opponentWins++;
        return outcome[1];
      };
    case 'scissors':
      switch (oO) {
        case 'rock':
          opponentWins++;
        return outcome[1];
        case 'paper':
          playerWins++;
        return outcome[0];
        case 'scissors':
          draws++;
        return outcome[2];
      };
    break;
  };
};

function getOverallWinner(pW, oW) {
  if (pW > oW) {
    return 'Player Won Overall Match!';
  }
  if (pW == oW) {
    return 'Match Draw!';
  }
  return 'Opponent Won Overall Match!';
}

function updateScoreboard(pW, pWD, tR, tRD, dR, dRD, oW, oWD) {
  pWD.innerHTML = playerName + ': ' + pW;
  tRD.innerHTML = 'Total Rounds: ' + tR;
  dRD.innerHTML = 'Draws: ' + dR;
  oWD.innerHTML = 'Opponent: ' + oW;
}

function displayWinner(winDis, win){
  winDis.innerHTML = win;
}

  // Gameplay Functions End
  // Gameplay Outputs
  
body.onload = function() {
  header.innerHTML = playerName + ' vs Computer';
  playerWinDisplay.innerHTML = playerName + ': ';
};

rockButton.onclick = function() {
  console.log(maxRounds);
  if (totalRounds < maxRounds){
    playersChoice.src='img/rock.png';
    playerOption = 'rock';
    opponentOption = opponentMove();
    let Winner = getWinner(playerOption, opponentOption);
    updateScoreboard(playerWins, playerWinDisplay, totalRounds, roundDisplay, draws, drawsDisplay, opponentWins, opponentWinDisplay);
    displayWinner(winnerDisplay, Winner);
  } else {
    redirect.href = 'https://aditya8697.github.io/mini-games/';
    winnerDisplay.innerHTML = getOverallWinner(playerWins, opponentWins);
  };
};
paperButton.onclick = function() {
  if (totalRounds < maxRounds){
    playersChoice.src='img/paper.png';
    playerOption = 'paper';
    opponentOption = opponentMove();
    let Winner = getWinner(playerOption, opponentOption);
    console.log(Winner);
    updateScoreboard(playerWins, playerWinDisplay, totalRounds, roundDisplay, draws, drawsDisplay, opponentWins, opponentWinDisplay);
    displayWinner(winnerDisplay, Winner);
  } else {
    redirect.href = 'https://aditya8697.github.io/mini-games/';
    winnerDisplay.innerHTML=getOverallWinner(playerWins, opponentWins);
  };
};
scissorsButton.onclick = function() {
  if (totalRounds < maxRounds){
    playersChoice.src='img/scissors.png';
    playerOption = 'scissors';
    opponentOption = opponentMove();
    let Winner = getWinner(playerOption, opponentOption);
    console.log(Winner);
    updateScoreboard(playerWins, playerWinDisplay, totalRounds, roundDisplay, draws, drawsDisplay, opponentWins, opponentWinDisplay);
    displayWinner(winnerDisplay, Winner);
  } else {
    redirect.href = 'https://aditya8697.github.io/mini-games/';
    winnerDisplay.innerHTML = getOverallWinner(playerWins, opponentWins);
  };
};
  //Gameplay Outputs End
// Gameplay End
