const storyContainer = document.getElementById("story-container");
const storyText = document.getElementById("story-text");

const stories = {
    "sci-fi": {
        start: "You wake up on a distant planet. What do you do?",
        choices: {
            "Explore the planet": "You find a crashed spaceship.",
            "Stay where you are": "A strange creature approaches.",
        },
    },
    medieval: {
        start: "You are in a medieval town. What do you do?",
        choices: {
            "Enter the castle": "The king gives you a quest.",
            "Go to the marketplace": "You overhear a secret plot.",
        },
    },
    apocalyptic: {
        start: "The world has ended. Survival is key. What do you do?",
        choices: {
            "Search for supplies": "You find a group of survivors.",
            "Build a shelter": "You fend off raiders.",
        },
    },
};

let currentStory = null;

document.querySelectorAll(".choice-btn").forEach((button) => {
    button.addEventListener("click", () => {
        const choice = button.dataset.choice;
        if (!currentStory) {
            currentStory = stories[choice];
            updateStory(currentStory.start, currentStory.choices);
        }
    });
});

function updateStory(text, choices) {
    storyText.textContent = text;
    storyContainer.innerHTML = `<p id="story-text">${text}</p>`;
    Object.entries(choices).forEach(([option, result]) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.className = "choice-btn";
        button.onclick = () => updateStory(result, {});
        storyContainer.appendChild(button);
    });
}
