// Define the story content and choices
const stories = {
    "sci-fi": {
        start: "You wake up on a distant planet. What do you do?",
        choices: {
            "Explore the planet": "You find a crashed spaceship.",
            "Stay where you are": "A strange creature approaches.",
        },
    },
    "medieval": {
        start: "You are in a medieval town. What do you do?",
        choices: {
            "Enter the castle": "The massive gates creak open, revealing the grand entrance.",
            "Go to the marketplace": "The marketplace is bustling with activity.",
            "Visit the tavern": "The tavern is filled with laughter and music.",
        },
    },
    "apocalyptic": {
        start: "The world has ended. Survival is key. What do you do?",
        choices: {
            "Search for supplies": "You find a group of survivors.",
            "Build a shelter": "You fend off raiders.",
        },
    },
};

// Store the current state of the story
let currentStoryKey = null;

// Function to show the genre selection screen
function showStorySelection() {
    const genreButtons = document.querySelectorAll('.choice-btn');
    genreButtons.forEach(button => {
        button.addEventListener('click', function() {
            startStory(button.getAttribute('data-choice'));
        });
    });
}

// Function to start the story based on the selected genre
function startStory(selectedGenre) {
    currentStoryKey = selectedGenre;
    const story = stories[currentStoryKey];

    // Hide the genre selection and show the story and choices container
    document.getElementById("story-container").style.display = 'none';
    document.getElementById("choices-container").style.display = 'block';

    // Display the first part of the story
    displayStory(story);
}

// Function to display the current story and choices
function displayStory(story) {
    // Display the story text
    document.getElementById("story-text").innerText = story.start;

    // Clear any existing choice buttons
    const choicesContainer = document.getElementById('choices-container');
    choicesContainer.innerHTML = '';

    // Add new choice buttons
    for (let choice in story.choices) {
        const button = document.createElement('button');
        button.innerText = choice;
        button.onclick = () => handleChoice(choice, story);
        choicesContainer.appendChild(button);
    }
}

// Function to handle when a user makes a choice
function handleChoice(choice, currentStory) {
    // Use the choice to get the next part of the story
    const nextStoryText = currentStory.choices[choice];

    // Display the next part of the story
    document.getElementById("story-text").innerText = nextStoryText;

    // Optionally, show more choices after a part of the story
    // For simplicity, we'll just end after this for now
}

// Initialize story selection
showStorySelection();
