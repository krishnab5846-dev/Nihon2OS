// Dashboard Button
const practiceBtn = document.getElementById("practiceBtn");

if (practiceBtn) {
  practiceBtn.addEventListener("click", () => {
    alert("🚀 Practice mode coming soon!");
  });
}

// Vocabulary Page
const wordList = document.getElementById("wordList");

if (wordList && typeof n5Words !== "undefined") {

  displayWords(n5Words);

  const search = document.getElementById("search");

  search.addEventListener("input", () => {

    const value = search.value.toLowerCase();

    const filtered = n5Words.filter(word =>
      word.japanese.includes(value) ||
      word.reading.includes(value) ||
      word.meaning.toLowerCase().includes(value)
    );

    displayWords(filtered);

  });

}

function displayWords(words) {

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
