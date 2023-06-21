const tableCells = document.querySelectorAll('.table-cell');
const characterImage = createCharacterElement();
let lastTargetIndex = getRandomIndex(0, tableCells.length - 1);

function removeCharacter() {
  tableCells[lastTargetIndex].innerHTML = '';
}

function appendCharacter() {
  const randomIndex = getRandomIndex(0, tableCells.length - 1);
  tableCells[randomIndex].appendChild(characterImage);
  lastTargetIndex = randomIndex;
}

function moveCharacter() {
  removeCharacter();
  appendCharacter();
}

tableCells.forEach((cell) => {
  cell.addEventListener('click', () => {
    if (cell.classList.contains('active')) {
      clearTimeout(timeout);
      moveCharacter();
      timeout = setTimeout(intervalHandler, 1000);
    }
  });
});

let timeout = setTimeout(intervalHandler, 1000);
