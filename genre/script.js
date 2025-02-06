// Genre data
const genres = {
  realism: {
    title: "Realism",
    description: [
      "Focus on everyday life and ordinary people.",
      "Detailed and accurate depictions of reality.",
      "Exploration of social issues and human behavior.",
      "Avoidance of romanticism or exaggeration."
    ]
  },
  scifi: {
    title: "Science Fiction",
    description: [
      "Futuristic or speculative settings.",
      "Advanced technology (e.g., AI, space travel).",
      "Exploration of scientific concepts.",
      "Social commentary on societal issues."
    ]
  },
  fantasy: {
    title: "Fantasy",
    description: [
      "Magical elements and mythical creatures.",
      "Richly detailed world-building.",
      "Hero’s journey or quest narrative.",
      "Clear battle between good and evil."
    ]
  },
  horror: {
    title: "Horror",
    description: [
      "Designed to evoke fear or dread.",
      "Supernatural or psychological threats.",
      "Isolation of characters.",
      "Gore, suspense, and shocking twists."
    ]
  },
  magicalrealism: {
    title: "Magical Realism",
    description: [
      "Blend of realistic settings with magical elements.",
      "Magic is treated as a normal part of the world.",
      "Focus on character emotions and relationships.",
      "Often used to explore cultural or political themes."
    ]
  },
  romance: {
    title: "Romance",
    description: [
      "Central love story as the focus.",
      "Emotional conflict and obstacles.",
      "Happy ending for the couple.",
      "Common tropes like love triangles or enemies-to-lovers."
    ]
  },
  mystery: {
    title: "Mystery",
    description: [
      "Central puzzle or crime (e.g., murder, theft).",
      "Detective or sleuth as the protagonist.",
      "Clues and red herrings to mislead or guide.",
      "Twist ending for an unexpected resolution."
    ]
  },
  historical: {
    title: "Historical Fiction",
    description: [
      "Set in a real historical period.",
      "Blend of factual and fictional elements.",
      "Themes of identity, survival, or resilience.",
      "Attention to historical accuracy and detail."
    ]
  },
  dystopia: {
    title: "Dystopia",
    description: [
      "Oppressive or tyrannical society.",
      "Themes of rebellion and resistance.",
      "Exploration of control and freedom.",
      "Grim, often post-apocalyptic settings."
    ]
  },
  gothic: {
    title: "Gothic",
    description: [
      "Dark, eerie, and mysterious atmosphere.",
      "Focus on the supernatural or grotesque.",
      "Themes of decay, madness, and isolation.",
      "Often set in haunted castles or mansions."
    ]
  }
};

// Get DOM elements
const genreTitle = document.getElementById("genre-title");
const genreDescription = document.getElementById("genre-description");
const genreButtons = document.querySelectorAll(".genre-list button");

// Add event listeners to buttons
genreButtons.forEach(button => {
  button.addEventListener("click", () => {
    const genreKey = button.getAttribute("data-genre");
    const genre = genres[genreKey];
    genreTitle.textContent = genre.title;
    genreDescription.innerHTML = genre.description.map(item => `<li>${item}</li>`).join("");
  });
});