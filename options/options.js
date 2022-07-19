const maxRoundsOption = document.getElementById('max-rounds');
const addOption = document.getElementById('increment');
const subtractOption = document.getElementById('decrement');
const body = document.getElementById('body');
const inputName = document.getElementById('input-name');
const saveButton = document.getElementById('save');

var maxRounds = 5
  , playerName = 'Anonymous';

function setupDisplay(element, changes) {
  element.innerHTML = changes;
};

body.onload = function() {
  localStorage.setItem('MAX$ROUNDS', maxRounds);
  setupDisplay(maxRoundsOption, (maxRounds))
  localStorage.setItem('PLAYER$NAME', playerName);
  inputName.value = playerName;
}

addOption.onclick = function() {
  maxRounds++;
  setupDisplay(maxRoundsOption, (maxRounds));
}

subtractOption.onclick = function() {
  maxRounds--;
  setupDisplay(maxRoundsOption, (maxRounds));
}

saveButton.onclick = function() {
  localStorage.setItem('MAX$ROUNDS', maxRounds);
  playerName = inputName.value;
  console.log(playerName);
  localStorage.setItem('PLAYER$NAME', playerName);
}
