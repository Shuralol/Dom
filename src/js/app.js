import goblin from "../img/goblin.png";
const getRandomIndex = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
const cells = document.querySelectorAll(".game-tile");
let randomIndex = getRandomIndex(0, cells.length - 1);

const image = createCharacterElement();

function createCharacterElement() {
  const characterImage = document.createElement("img");
  characterImage.classList.add("character-image");
  characterImage.src = goblin;
  characterImage.alt = "Character Image";

  return characterImage;
}

function moveCharacter() {
  cells[getRandomIndex(0, cells.length - 1)].append(image);
}

setInterval(moveCharacter, 1000);
