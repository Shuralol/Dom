import "../js/app.js";

function getRandomIndex(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function moveCharacter() {
  const gameTiles = document.querySelectorAll(".game-tile");

  let randomIndex = getRandomIndex(0, gameTiles.length - 1);

  const currentCharacterIndex = Array.from(gameTiles).findIndex((tile) => {
    return tile.classList.contains("character-image");
  });

  while (randomIndex === currentCharacterIndex) {
    randomIndex = getRandomIndex(0, gameTiles.length - 1);
  }

  gameTiles.forEach((tile) => {
    tile.classList.remove("character-image");
  });

  gameTiles[randomIndex].classList.add("character-image");
}

setInterval(moveCharacter, 3000);
