// ======================
// Dashboard Button
// ======================

const practiceBtn = document.getElementById("practiceBtn");

if (practiceBtn) {
  practiceBtn.addEventListener("click", () => {
    alert("🚀 Practice mode coming soon!");
  });
}

// ======================
// Vocabulary Page
// ======================

const wordList = document.getElementById("wordList");
const search = document.getElementById("search");

let currentWords = [];

if (typeof n5Words !== "undefined" && wordList) {
  currentWords = [...n5Words];
  displayWords(currentWords);
}

// Search
if (search) {
  search.addEventListener("input", () => {
    const value = search.value.toLowerCase();

    const filtered = currentWords.filter(word =>
      word.japanese.includes(value) ||
      word.reading.includes(value) ||
      word.meaning.toLowerCase().includes(value)
    );

    displayWords(filtered);
  });
}

// Filter Buttons
function filterWords(type) {

  if (type === "All") {
    currentWords = [...n5Words];
  } else {
    currentWords = n5Words.filter(word => word.type === type);
  }

  if (search) {
    search.value = "";
  }

  displayWords(currentWords);
}

// Display Cards
function displayWords(words) {

  if (!wordList) return;

  wordList.innerHTML = "";

  words.forEach(word => {

    wordList.innerHTML += `
      <div class="word-card">
        <h2>${word.japanese}</h2>
        <h3>${word.reading}</h3>

        <p><strong>Meaning:</strong> ${word.meaning}</p>

        <div class="badge">${word.type}</div>
      </div>
    `;

  });

}
