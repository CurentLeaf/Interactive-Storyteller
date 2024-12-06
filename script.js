const stories = {
    'Sci-Fi': {
        start: {
            text: "You wake up in a cold, metallic room on an alien spaceship. The air is filled with the hum of machinery. A faint, robotic voice echoes: 'Subject awake. Initiate observation.' What will you do?",
            choices: [
                { text: "Search the room for anything useful", next: "searchRoom" },
                { text: "Try to communicate with the voice", next: "communicateVoice" },
                { text: "Attempt to escape the room", next: "escapeRoom" }
            ]
        },
        searchRoom: {
            text: "You scan the room and find a small, handheld device glowing faintly on a console. As you pick it up, the hum grows louder, and a door slides open. Beyond it, you hear strange chittering noises.",
            choices: [
                { text: "Enter the hallway cautiously", next: "hallway" },
                { text: "Hide in the room and observe", next: "hideInRoom" }
            ]
        },
        communicateVoice: {
            text: "You speak into the void, 'Who are you? What do you want?' The robotic voice responds, 'Cooperate and survive. Defy and perish.' Suddenly, a hologram of an alien appears, pointing toward a panel on the wall.",
            choices: [
                { text: "Follow the alien's guidance", next: "followAlien" },
                { text: "Refuse to cooperate and challenge the alien", next: "challengeAlien" }
            ]
        },
        escapeRoom: {
            text: "You rush to the door and find a keypad glowing with symbols. Alarms begin to blare as you randomly press buttons. The door opens, but the alarms attract heavy footsteps approaching rapidly.",
            choices: [
                { text: "Run down the corridor", next: "corridorEscape" },
                { text: "Confront whoever is coming", next: "confrontIntruder" }
            ]
        },
        hallway: {
            text: "The hallway is dimly lit, with walls pulsating as if alive. Ahead, you see two paths: one leads to a room filled with glowing tanks, and the other to a dark, silent corridor.",
            choices: [
                { text: "Enter the room with glowing tanks", next: "glowingTanks" },
                { text: "Explore the dark corridor", next: "darkCorridor" }
            ]
        },
        hideInRoom: {
            text: "You hide behind a console as the chittering grows louder. Through the door, you see small, insect-like creatures scuttling past. One pauses and seems to sniff the air.",
            choices: [
                { text: "Hold your breath and wait", next: "creatureMovesOn" },
                { text: "Attempt to attack the creature", next: "creatureAttack" }
            ]
        },
        followAlien: {
            text: "You approach the panel the hologram indicated. A series of symbols lights up. The alien speaks: 'Decipher to unlock.' Time is running out as a countdown begins.",
            choices: [
                { text: "Attempt to solve the puzzle", next: "solvePuzzle" },
                { text: "Smash the panel out of frustration", next: "smashPanel" }
            ]
        },
        challengeAlien: {
            text: "You shout at the hologram, 'I’m not your prisoner!' The hologram flickers, and suddenly the floor drops out beneath you, sending you into a dark chamber.",
            choices: [
                { text: "Explore the chamber", next: "exploreChamber" },
                { text: "Look for a way back up", next: "wayBackUp" }
            ]
        },
        glowingTanks: {
            text: "The tanks are filled with glowing, green liquid, each containing a suspended humanoid figure. One tank begins to crack as you hear a hiss.",
            choices: [
                { text: "Inspect the cracking tank", next: "crackingTank" },
                { text: "Leave the room immediately", next: "leaveTanks" }
            ]
        },
        darkCorridor: {
            text: "The corridor is unnervingly silent, but you feel a faint vibration beneath your feet. A faint light flickers at the end.",
            choices: [
                { text: "Investigate the light", next: "lightInvestigation" },
                { text: "Retreat and try another path", next: "retreatPath" }
            ]
        },
        creatureMovesOn: {
            text: "The creature seems to lose interest and scuttles away. You breathe a sigh of relief, but now you hear metallic footsteps approaching from another direction.",
            choices: [
                { text: "Prepare to defend yourself", next: "defendYourself" },
                { text: "Look for an escape route", next: "lookEscapeRoute" }
            ]
        },
        creatureAttack: {
            text: "You grab a nearby tool and lunge at the creature. It lets out a screech, summoning others. You’ve made a mistake.",
            choices: []
        },
        solvePuzzle: {
            text: "You quickly decipher the symbols, and the door unlocks, revealing a vast control room with a massive star map.",
            choices: [
                { text: "Examine the star map", next: "examineStarMap" },
                { text: "Look for a way to contact help", next: "contactHelp" }
            ]
        },
        smashPanel: {
            text: "You smash the panel, and the alien hologram flickers out. The room goes dark, and the hum of the ship grows louder.",
            choices: [
                { text: "Try to navigate the dark", next: "navigateDark" },
                { text: "Stay still and wait for help", next: "waitHelp" }
            ]
        },
        exploreChamber: {
            text: "The chamber is filled with strange machinery, glowing with pulsating lights. A terminal flashes with alien script, inviting interaction.",
            choices: [
                { text: "Interact with the terminal", next: "interactTerminal" },
                { text: "Ignore it and explore further", next: "exploreFurther" }
            ]
        },
        wayBackUp: {
            text: "You find a series of pipes leading upward. As you climb, the metal creaks ominously.",
            choices: [
                { text: "Continue climbing", next: "continueClimbing" },
                { text: "Drop back down", next: "dropBackDown" }
            ]
        },
        // Additional paths and unique endings can be added here...
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
    }
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
