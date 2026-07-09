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
