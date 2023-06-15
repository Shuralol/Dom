/* import "../js/app.js"; */

function createCharacterElement() {
  const characterImage = document.createElement("img");
  characterImage.classList.add("character-image");
  characterImage.src = "./img/goblin.png";
  characterImage.alt = "Character Image";
  
  return characterImage;
}

function getRandomIndex(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function moveCharacter() {
  const gameTiles = document.querySelectorAll(".game-tile");
  const currentCharacter = document.querySelector(".character-image");
  const parentElement = currentCharacter.parentElement;

  const availableTiles = Array.from(gameTiles).filter((tile) => {
    return !tile.classList.contains("character-image");
  });

  const randomIndex = getRandomIndex(0, availableTiles.length - 1);
  const newCharacterTile = availableTiles[randomIndex];

  currentCharacter.remove();
  parentElement.appendChild(createCharacterElement());
  newCharacterTile.classList.add("character-image");
}

setInterval(moveCharacter, 3000);
