// Improved `stories` structure with self-contained endings.
const stories = {
    'Sci-Fi': {
        start: {
            text: "You find yourself aboard a mysterious spaceship. What will you do?",
            choices: [
                { text: "Explore the control room", next: "controlRoom" },
                { text: "Investigate the cargo bay", next: "cargoBay" }
            ]
        },
        controlRoom: {
            text: "The control room is filled with blinking lights. Suddenly, alarms blare!",
            choices: [
                { text: "Attempt to shut down the alarm", next: "shutDownAlarm" },
                { text: "Escape to the docking bay", next: "dockingBay" }
            ]
        },
        cargoBay: {
            text: "The cargo bay contains strange alien artifacts. One begins to glow!",
            choices: [
                { text: "Touch the artifact", next: "artifactTouched" },
                { text: "Back away slowly", next: "backAway" }
            ]
        },
        shutDownAlarm: {
            text: "You successfully deactivate the alarm and save the ship!",
            choices: []
        },
        dockingBay: {
            text: "You escape in a pod, but the ship is lost forever.",
            choices: []
        },
        artifactTouched: {
            text: "The artifact teleports you to a new galaxy!",
            choices: []
        },
        backAway: {
            text: "You safely retreat, but the mystery remains unsolved.",
            choices: []
        }
    },
    // Similarly for Medieval and Apocalyptic...
};

function showEnding(node) {
    const storyText = document.getElementById('story-text');
    const choiceButtons = document.getElementById('choice-buttons');

    // Display the ending text
    storyText.textContent = node.text;

    // Clear and add a restart button
    choiceButtons.innerHTML = '<button onclick="restart()">Restart</button>';
}

function restart() {
    // Reset the UI to genre selection
    document.getElementById('story-container').style.display = 'none';
    document.getElementById('genre-selection').style.display = 'block';
}

function startStory(genre) {
    // Ensure the genre exists
    if (!stories[genre]) {
        alert("Error: Selected genre not found!");
        return;
    }

    // Initialize story UI
    document.getElementById('genre-selection').style.display = 'none';
    document.getElementById('story-container').style.display = 'block';
    updateStory(stories[genre].start, genre);
}

function updateStory(node, genre) {
    const storyText = document.getElementById('story-text');
    const choiceButtons = document.getElementById('choice-buttons');

    // Ensure the node exists
    if (!node) {
        storyText.textContent = "An error occurred. This path is missing!";
        choiceButtons.innerHTML = '<button onclick="restart()">Restart</button>';
        return;
    }

    // Update the story text
    storyText.textContent = node.text;

    // Clear and repopulate choice buttons
    choiceButtons.innerHTML = '';
    if (node.choices && node.choices.length > 0) {
        node.choices.forEach(choice => {
            const button = document.createElement('button');
            button.textContent = choice.text;

            // Update the story on button click
            button.onclick = () => {
                const nextNode = stories[genre][choice.next];
                if (nextNode) {
                    updateStory(nextNode, genre);
                } else {
                    showEnding({ text: "An error occurred. This path is missing!" });
                }
            };
            choiceButtons.appendChild(button);
        });
    } else {
        // If no choices, show the ending
        showEnding(node);
    }
}
