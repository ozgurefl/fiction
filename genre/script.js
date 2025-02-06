// Genre data
const genres = {
  realism: {
    title: "Realism",
    description: [
      "Focus on everyday life and ordinary people.",
      "Detailed and accurate depictions of reality.",
      "Exploration of social issues and human behavior.",
      "Avoidance of romanticism or exaggeration."
    ],
    examples: ["To Kill a Mockingbird by Harper Lee", "Middlemarch by George Eliot"]
  },
  scifi: {
    title: "Science Fiction",
    description: [
      "Futuristic or speculative settings.",
      "Advanced technology (e.g., AI, space travel).",
      "Exploration of scientific concepts.",
      "Social commentary on societal issues."
    ],
    examples: ["Dune by Frank Herbert", "The Matrix (movie)"]
  },
  fantasy: {
    title: "Fantasy",
    description: [
      "Magical elements and mythical creatures.",
      "Richly detailed world-building.",
      "Hero’s journey or quest narrative.",
      "Clear battle between good and evil."
    ],
    examples: ["The Lord of the Rings by J.R.R. Tolkien", "Harry Potter by J.K. Rowling"]
  },
  horror: {
    title: "Horror",
    description: [
      "Designed to evoke fear or dread.",
      "Supernatural or psychological threats.",
      "Isolation of characters.",
      "Gore, suspense, and shocking twists."
    ],
    examples: ["The Shining by Stephen King", "Get Out (movie)"]
  },
  magicalrealism: {
    title: "Magical Realism",
    description: [
      "Blend of realistic settings with magical elements.",
      "Magic is treated as a normal part of the world.",
      "Focus on character emotions and relationships.",
      "Often used to explore cultural or political themes."
    ],
    examples: ["One Hundred Years of Solitude by Gabriel García Márquez", "The House of the Spirits by Isabel Allende"]
  },
  romance: {
    title: "Romance",
    description: [
      "Central love story as the focus.",
      "Emotional conflict and obstacles.",
      "Happy ending for the couple.",
      "Common tropes like love triangles or enemies-to-lovers."
    ],
    examples: ["Pride and Prejudice by Jane Austen", "The Notebook by Nicholas Sparks"]
  },
  mystery: {
    title: "Mystery",
    description: [
      "Central puzzle or crime (e.g., murder, theft).",
      "Detective or sleuth as the protagonist.",
      "Clues and red herrings to mislead or guide.",
      "Twist ending for an unexpected resolution."
    ],
    examples: ["Sherlock Holmes by Arthur Conan Doyle", "Gone Girl by Gillian Flynn"]
  },
  historical: {
    title: "Historical Fiction",
    description: [
      "Set in a real historical period.",
      "Blend of factual and fictional elements.",
      "Themes of identity, survival, or resilience.",
      "Attention to historical accuracy and detail."
    ],
    examples: ["The Book Thief by Markus Zusak", "Wolf Hall by Hilary Mantel"]
  },
  dystopia: {
    title: "Dystopia",
    description: [
      "Oppressive or tyrannical society.",
      "Themes of rebellion and resistance.",
      "Exploration of control and freedom.",
      "Grim, often post-apocalyptic settings."
    ],
    examples: ["1984 by George Orwell", "The Hunger Games by Suzanne Collins"]
  },
  gothic: {
    title: "Gothic",
    description: [
      "Dark, eerie, and mysterious atmosphere.",
      "Focus on the supernatural or grotesque.",
      "Themes of decay, madness, and isolation.",
      "Often set in haunted castles or mansions."
    ],
    examples: ["Frankenstein by Mary Shelley", "Dracula by Bram Stoker"]
  }
};

// Get DOM elements
const genreTitle = document.getElementById("genre-title");
const genreDescription = document.getElementById("genre-description");
const genreExamples = document.getElementById("genre-examples");
const genreButtons = document.querySelectorAll(".genre-list button");

// Add event listeners to buttons
genreButtons.forEach(button => {
  button.addEventListener("click", () => {
    const genreKey = button.getAttribute("data-genre");
    const genre = genres[genreKey];
    genreTitle.textContent = genre.title;
    genreDescription.innerHTML = genre.description.map(item => `<li>${item}</li>`).join("");
    genreExamples.innerHTML = `<strong>Examples:</strong> ${genre.examples.join(", ")}`;
  });
});

// Quick Overview Section
document.getElementById("toggle-overview").addEventListener("click", () => {
  const table = document.getElementById("overview-table");
  table.style.display = table.style.display === "none" ? "block" : "none";
});

// Compare Genres Feature
document.getElementById("compare-genres").addEventListener("click", () => {
  const comparisonSection = document.getElementById("comparison-section");
  comparisonSection.style.display = "block";
});

document.getElementById("compare-button").addEventListener("click", () => {
  const genre1 = document.getElementById("genre1").value;
  const genre2 = document.getElementById("genre2").value;
  const genre1Data = genres[genre1];
  const genre2Data = genres[genre2];

  const results = `
    <h3>${genre1Data.title} vs. ${genre2Data.title}</h3>
    <div>
      <h4>${genre1Data.title}</h4>
      <ul>${genre1Data.description.map(item => `<li>${item}</li>`).join("")}</ul>
      <p><strong>Examples:</strong> ${genre1Data.examples.join(", ")}</p>
    </div>
    <div>
      <h4>${genre2Data.title}</h4>
      <ul>${genre2Data.description.map(item => `<li>${item}</li>`).join("")}</ul>
      <p><strong>Examples:</strong> ${genre2Data.examples.join(", ")}</p>
    </div>
  `;
  document.getElementById("comparison-results").innerHTML = results;
});