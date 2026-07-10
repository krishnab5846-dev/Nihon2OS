function getFavorites() {
  return JSON.parse(localStorage.getItem("favorites")) || [];
}

function saveFavorites(favorites) {
  localStorage.setItem("favorites", JSON.stringify(favorites));
}

function toggleFavourite(word) {

  let favorites = getFavorites();

  if (favorites.includes(word)) {
    favorites = favorites.filter(w => w !== word);
  } else {
    favorites.push(word);
  }

  saveFavorites(favorites);

  displayWords(currentWords);
}
function getLearnedWords() {
  return JSON.parse(localStorage.getItem("learnedWords")) || [];
}

function saveLearnedWords(words) {
  localStorage.setItem("learnedWords", JSON.stringify(words));
}

function toggleLearned(word) {

  let learned = getLearnedWords();

  if (learned.includes(word)) {
    learned = learned.filter(w => w !== word);
  } else {
    learned.push(word);
  }

  saveLearnedWords(learned);

  displayWords(currentWords);

}
