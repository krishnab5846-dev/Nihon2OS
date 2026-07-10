const wordList = document.getElementById("wordList");
const search = document.getElementById("search");

let currentWords = [];

let currentPracticeWord = null;
let meaningVisible = true;

if (typeof n5Words !== "undefined" && wordList) {
  currentWords = [...n5Words];
  displayWords(currentWords);
}

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

function filterWords(type) {

  if (type === "All") {
    currentWords = [...n5Words];
  } else {
    currentWords = n5Words.filter(word => word.type === type);
  }

  if (search) search.value = "";

  displayWords(currentWords);
}

function displayWords(words) {

  if (!wordList) return;

  wordList.innerHTML = "";

  updateProgress();
  
  const favorites = getFavorites();
  const learnedWords = getLearnedWords();

  words.forEach(word => {

    const saved = favorites.includes(word.japanese);
    const learned = learnedWords.includes(word.japanese);

    wordList.innerHTML += `
      <div class="word-card">

        <div style="display:flex;justify-content:space-between;align-items:center;">

          <h2>${word.japanese}</h2>

          <button
            onclick="toggleFavourite('${word.japanese}')"
            style="background:none;border:none;font-size:28px;cursor:pointer;padding:0;">
            ${saved ? "❤️" : "🤍"}
          </button>

        </div>

        <h3>${word.reading}</h3>

        <p><strong>Meaning:</strong> ${word.meaning}</p>

        <div style="display:flex;justify-content:space-between;align-items:center;margin-top:15px;">

          <div class="badge">${word.type}</div>

          <button
            onclick="toggleLearned('${word.japanese}')"
            style="
              background:${learned ? '#16a34a' : '#475569'};
              color:white;
              border:none;
              padding:8px 14px;
              border-radius:8px;
              cursor:pointer;
            ">
            ${learned ? "✅ Learned" : "Mark as Learned"}
          </button>

        </div>

      </div>
    `;

  });

}
function updateProgress() {

  const learned = getLearnedWords().length;
  const total = n5Words.length;

  const percent = Math.round((learned / total) * 100);

  document.getElementById("progressText").textContent =
    `${learned} / ${total} Learned`;

  document.getElementById("progressPercent").textContent =
    `${percent}%`;

  document.getElementById("progressFill").style.width =
    `${percent}%`;

}
const randomBtn = document.getElementById("randomBtn");

if (randomBtn) {

  randomBtn.addEventListener("click", showRandomWord);

  showRandomWord();

}

function showRandomWord() {

  const random =
    n5Words[Math.floor(Math.random() * n5Words.length)];

  document.getElementById("practiceJapanese").textContent =
    random.japanese;

  document.getElementById("practiceReading").textContent =
    random.reading;

  document.getElementById("practiceMeaning").textContent =
    random.meaning;

}
function showRandomWord() {

  const random =
    n5Words[Math.floor(Math.random() * n5Words.length)];

  document.getElementById("practiceJapanese").textContent =
    random.japanese;

  document.getElementById("practiceReading").textContent =
    random.reading;

  document.getElementById("practiceMeaning").textContent =
    random.meaning;

}
