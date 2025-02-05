// Genre data
const genres = {
  mystery: {
    title: "Mystery/Thriller",
    description: [
      "Central puzzle or crime (e.g., murder, theft).",
      "Detective or sleuth as the protagonist.",
      "Clues and red herrings to mislead or guide.",
      "Suspenseful buildup of tension.",
      "Twist ending for an unexpected resolution."
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
  romance: {
    title: "Romance",
    description: [
      "Central love story as the focus.",
      "Emotional conflict and obstacles.",
      "Happy ending for the couple.",
      "Common tropes like love triangles or enemies-to-lovers."
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
  historical: {
    title: "Historical Fiction",
    description: [
      "Set in a real historical period.",
      "Blend of factual and fictional elements.",
      "Themes of identity, survival, or resilience.",
      "Attention to historical accuracy and detail."
    ]
  },
  literary: {
    title: "Literary Fiction",
    description: [
      "Character-driven narratives.",
      "Exploration of complex themes (e.g., morality, identity).",
      "Ambiguous or open-ended resolutions.",
      "Emphasis on stylistic and innovative prose."
    ]
  },
  adventure: {
    title: "Adventure",
    description: [
      "Journey or quest as the central plot.",
      "Action-packed and high-stakes scenarios.",
      "Exotic or remote locations.",
      "Heroic and resourceful protagonist."
    ]
  },
  dystopian: {
    title: "Dystopian",
    description: [
      "Oppressive or tyrannical society.",
      "Themes of rebellion and resistance.",
      "Exploration of control and freedom.",
      "Grim, often post-apocalyptic settings."
    ]
  },
  ya: {
    title: "Young Adult (YA)",
    description: [
      "Coming-of-age themes.",
      "Relatable teenage protagonists.",
      "Fast-paced and engaging plots.",
      "Focus on friendships, family, and first love."
    ]
  },
  western: {
    title: "Western",
    description: [
      "Set in the American Old West.",
      "Cowboys, outlaws, and lawmen.",
      "Themes of justice and redemption.",
      "Landscape as a central character."
    ]
  },
  crime: {
    title: "Crime",
    description: [
      "Focus on criminal activity.",
      "Morally ambiguous characters.",
      "Complex plots with twists and turns.",
      "Exploration of law enforcement and justice."
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