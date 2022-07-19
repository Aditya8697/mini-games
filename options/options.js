const maxRoundsOption = document.getElementById('max-rounds');
const addOption = document.getElementById('increment');
const subtractOption = document.getElementById('decrement');
const body = document.getElementById('body');
const inputName = document.getElementById('input-name');
const saveButton = document.getElementById('save');

var saves = localStorage.getItem('TOTAL$SAVES');

if (saves != 1) {
  var maxRounds = 5
    , playerName = 'Anonymous';
} else {
  maxRounds = localStorage.getItem('MAX$ROUNDS');
  playerName = localStorage.getItem('PLAYER$NAME');
}

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
  saves = 1;
  localStorage.setItem('TOTAL$SAVES', saves);
  localStorage.setItem('MAX$ROUNDS', maxRounds);
  playerName = inputName.value;
  console.log(playerName);
  localStorage.setItem('PLAYER$NAME', playerName);
}
