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
    'Medieval': {
        start: {
            text: "You stand before a grand castle. What will you do?",
            choices: [
                { text: "Enter the castle", next: "castleEntrance" },
                { text: "Explore the nearby forest", next: "forestPath" }
            ]
        },
        castleEntrance: {
            text: "You step into the dimly lit castle hall. You hear a noise!",
            choices: [
                { text: "Investigate the noise", next: "hauntedRoom" },
                { text: "Leave the castle", next: "outside" }
            ]
        },
        forestPath: {
            text: "The forest is serene, but you feel eyes watching you.",
            choices: [
                { text: "Follow the feeling", next: "mysteriousClearing" },
                { text: "Return to the castle", next: "castleEntrance" }
            ]
        },
        hauntedRoom: {
            text: "You find a ghost who warns you to leave!",
            choices: []
        },
        outside: {
            text: "You safely return home. Maybe the castle wasn't a good idea.",
            choices: []
        },
        mysteriousClearing: {
            text: "You discover a magical treasure in the clearing!",
            choices: []
        }
    },
    // Add "Apocalyptic" similarly...
};

function restart() {
    document.getElementById('story-container').style.display = 'none';
    document.getElementById('genre-selection').style.display = 'block';
}

function startStory(genre) {
    if (!stories[genre]) {
        alert("Selected genre not found!");
        return;
    }

    document.getElementById('genre-selection').style.display = 'none';
    document.getElementById('story-container').style.display = 'block';
    updateStory(stories[genre].start, genre);
}

function updateStory(node, genre) {
    const storyText = document.getElementById('story-text');
    const choiceButtons = document.getElementById('choice-buttons');

    if (!node) {
        storyText.textContent = "An error occurred. Path is missing!";
        choiceButtons.innerHTML = '<button onclick="restart()">Restart</button>';
        return;
    }

    storyText.textContent = node.text;

    choiceButtons.innerHTML = '';
    if (node.choices && node.choices.length > 0) {
        node.choices.forEach(choice => {
            const button = document.createElement('button');
            button.textContent = choice.text;
            button.onclick = () => {
                const nextNode = stories[genre][choice.next];
                if (nextNode) {
                    updateStory(nextNode, genre);
                } else {
                    storyText.textContent = "An error occurred. Path not found!";
                    choiceButtons.innerHTML = '<button onclick="restart()">Restart</button>';
                }
            };
            choiceButtons.appendChild(button);
        });
    } else {
        choiceButtons.innerHTML = '<button onclick="restart()">Restart</button>';
    }
}
