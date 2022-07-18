const maxRoundsOption = document.getElementById('max-rounds');
const playerNameOption = document.getElementById('player-name');

var maxRounds = 5
  , playerName = 'Anonymous';

function takeInput(display) {
  let input = prompt(display + ': ');
  return input;
}

function setupDisplay(element, changes) {
  element.innerHTML = changes;
};

function setupDisplayImg(element, changes) {
  element.src = changes;
};

maxRoundsOption.onclick = function() {
  maxRounds = takeInput('Max Rounds');
  localStorage.setItem('MAX$ROUNDS', maxRounds);
  setupDisplay(maxRoundsOption, ('Max Rounds: ' + maxRounds))
};

playerNameOption.onclick = function() {
  playerName = takeInput('Player Name:');
  localStorage.setItem('PLAYER$NAME', playerName);
  setupDisplay(playerNameOption, ('Player Name: ' + playerName));
};
