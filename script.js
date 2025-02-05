// Genre data
const genres = {
  mystery: {
    title: "Mystery/Thriller",
    description: "A central puzzle or crime, often a murder or theft, with a detective or sleuth investigating. Includes clues, red herrings, suspense, and a twist ending."
  },
  scifi: {
    title: "Science Fiction",
    description: "Futuristic or speculative settings with advanced technology. Explores scientific concepts and often includes social commentary."
  },
  fantasy: {
    title: "Fantasy",
    description: "Magical elements, mythical creatures, and richly detailed world-building. Often features a hero's journey and a battle between good and evil."
  },
  romance: {
    title: "Romance",
    description: "Focuses on a central love story with emotional conflict and a happy ending. Common tropes include love triangles and enemies-to-lovers."
  },
  horror: {
    title: "Horror",
    description: "Designed to evoke fear or dread, often with supernatural or psychological threats. Features isolation, gore, and suspense."
  },
  historical: {
    title: "Historical Fiction",
    description: "Set in a real historical period with accurate details. Blends fact and fiction, often exploring themes of identity or survival."
  },
  literary: {
    title: "Literary Fiction",
    description: "Character-driven stories with thematic depth. Often explores complex themes like identity, morality, or the human condition."
  },
  adventure: {
    title: "Adventure",
    description: "Features a journey or quest with action, danger, and exotic locations. Often includes a heroic protagonist."
  },
  dystopian: {
    title: "Dystopian",
    description: "Set in an oppressive society with themes of rebellion, control, and freedom. Often features a grim, post-apocalyptic world."
  },
  ya: {
    title: "Young Adult (YA)",
    description: "Focuses on coming-of-age themes with relatable protagonists. Explores friendships, family, and first love in a fast-paced plot."
  },
  western: {
    title: "Western",
    description: "Set in the American Old West with cowboys, outlaws, and themes of justice. The landscape often plays a significant role."
  },
  crime: {
    title: "Crime",
    description: "Focuses on criminal activity with morally ambiguous characters. Often includes complex plots with twists and turns."
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
    genreDescription.textContent = genre.description;
  });
});
