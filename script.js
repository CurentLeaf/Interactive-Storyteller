const storyContainer = document.getElementById("story-container");
const storyText = document.getElementById("story-text");
const choicesContainer = document.getElementById('choices-container');

const stories = {
    "sci-fi": {
        start: "You wake up on a distant planet. What do you do?",
        choices: {
            "Explore the planet": "sci-fi-explore", 
            "Stay where you are": "sci-fi-creature",
        },
    },
    "medieval": {
        start: "You are in a medieval town. What do you do?",
        choices: {
            "Enter the castle": "medieval-castle",
            "Go to the marketplace": "medieval-marketplace",
            "Visit the tavern": "medieval-tavern",
        },
    },
    "apocalyptic": {
        start: "The world has ended. Survival is key. What do you do?",
        choices: {
            "Search for supplies": "apocalyptic-supplies",
            "Build a shelter": "apocalyptic-shelter",
        },
    },

    // Story sections for the sci-fi path
    "sci-fi-explore": {
        start: "You find a crashed spaceship.",
        choices: {
            "Investigate the ship": "sci-fi-ship-investigation",
            "Leave the ship": "sci-fi-leave",
        },
    },
    "sci-fi-creature": {
        start: "A strange creature approaches.",
        choices: {
            "Talk to the creature": "sci-fi-creature-talk",
            "Run away": "sci-fi-creature-run",
        },
    },

    // Story sections for the medieval path
    "medieval-castle": {
        start: "You approach the castle's massive gates.",
        choices: {
            "Knock on the door": "medieval-knock",
            "Sneak around the back": "medieval-sneak",
        },
    },
    "medieval-marketplace": {
        start: "The marketplace bustles with activity. A shady figure beckons you over.",
        choices: {
            "Approach the shady figure": "medieval-approach",
            "Ignore the figure and walk away": "medieval-ignore",
        },
    },

    // Story sections for the apocalyptic path
    "apocalyptic-supplies": {
        start: "You find a group of survivors.",
        choices: {
            "Join the group": "apocalyptic-join-group",
            "Leave the group": "apocalyptic-leave-group",
        },
    },
    "apocalyptic-shelter": {
        start: "You fend off raiders and build a shelter.",
        choices: {
            "Reinforce the shelter": "apocalyptic-reinforce",
            "Escape the shelter": "apocalyptic-escape",
        },
    },
};

// Store current state of the story
let currentStoryType = null;
let currentStoryKey = null;

// Function to display the genre selection
function showStorySelection() {
    // Attach event listeners to the genre buttons
    const genreButtons = document.querySelectorAll('.choice-btn');
    genreButtons.forEach(button => {
        button.addEventListener('click', () => startStory(button.getAttribute('data-choice')));
    });
}

// Function to start the story based on the selected genre
function startStory(selectedGenre) {
    currentStoryType = selectedGenre;
    currentStoryKey = selectedGenre;  // Set the initial story key based on the genre selected

    // Hide the genre selection and show the story container
    storyContainer.style.display = 'none'; // Hide genre selection
    choicesContainer.style.display = 'block'; // Show story choices

    // Display the first part of the story for the selected genre
    displayStory(currentStoryKey);
}

// Function to display the current story and choices
function displayStory(storyKey) {
    const story = stories[storyKey];
    
    // Display the story text
    storyText.innerHTML = story.start;

    // Clear existing choices
    choicesContainer.innerHTML = '';

    // Add new choice buttons
    for (let choice in story.choices) {
        const button = document.createElement('button');
        button.innerText = choice;
        button.onclick = () => handleChoice(choice, storyKey);
        choicesContainer.appendChild(button);
    }
}

// Function to handle when a user makes a choice
function handleChoice(choice, currentKey) {
    const nextStoryKey = stories[currentKey].choices[choice];

    if (nextStoryKey) {
        currentStoryKey = nextStoryKey;  // Update the current story to the next one
        displayStory(currentStoryKey);  // Display the next part of the story
    }
}

// Initialize story selection
showStorySelection();
