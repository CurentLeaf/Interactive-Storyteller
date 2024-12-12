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
            text: "You grab a nearby tool and lunge at the creature. It lets out a screech, summoning others. They overwhelm you, and your journey ends in darkness.",
            choices: []
        },
        solvePuzzle: {
            text: "You quickly decipher the symbols, and the door unlocks, revealing a vast control room with a massive star map. A message appears: 'Coordinates set for home.'",
            choices: [
                { text: "Initiate the coordinates", next: "returnHome" },
                { text: "Search for other systems", next: "searchSystems" }
            ]
        },
        smashPanel: {
            text: "You smash the panel, and the alien hologram flickers out. The room goes dark, and the hum of the ship grows louder. Suddenly, the ship accelerates, throwing you into a wall.",
            choices: [
                { text: "Try to regain control", next: "regainControl" },
                { text: "Brace for impact", next: "braceImpact" }
            ]
        },
        exploreChamber: {
            text: "The chamber is filled with strange machinery, glowing with pulsating lights. A terminal flashes with alien script, inviting interaction. You hear a faint heartbeat-like thrum.",
            choices: [
                { text: "Interact with the terminal", next: "interactTerminal" },
                { text: "Ignore it and explore further", next: "exploreFurther" }
            ]
        },
        wayBackUp: {
            text: "You find a series of pipes leading upward. As you climb, the metal creaks ominously. With one final heave, you reach a hatch leading to the surface of the ship.",
            choices: [
                { text: "Open the hatch", next: "openHatch" },
                { text: "Look for another way out", next: "anotherWayOut" }
            ]
        },
        regainControl: {
            text: "Using all of your might and guidance of the alien, you were able to steer the spaceship away from the asteroid and fly away to safety",
            choices: []
        },
        openHatch: {
            text: "You open the hatch and immediately get sucked into the infinite void of space, doomed to float in the abyss for all enternity",
            choices: []
        },
        anotherWayOut: {
            text: "But then you realize that this might lead to somewhere you don't want to be at. You climb back down and enter a hallway",
            choices: [
                { text: "Enter hallway", next: "hallway"}
            ]
        },
        confrontIntruder: {
            text: "You approach the intruder, asking what they are doing here. They suddenly lunge at you and you trip on wires behind you, darkness filling your vision.",
            choices: []
        },
        corridorEscape: {
            text: "You run the other way down the corridor, not wanting to confront whatever was walking towards you. Your frantic running leads you into a hallway.",
            choices: [
                { text: "Enter hallway", next: "hallway"}
            ]
        },
        lightInvestigation: {
            text: "You walk towards the light but before you could reach it the floor falls beneath you and you fall into an abyss.",
            choices: []
        },
        crackingTank: {
            text: "The tank shatters, releasing a humanoid figure. It steps forward, shimmering with energy, and speaks: 'You have freed me. Together, we can escape.'",
            choices: []
        },
        leaveTanks: {
            text: "You leave the tanks and wander back into a nearby hallway.",
            choices: [
                {text: "Enter hallway", next: "hallway"}
            ]
        },
        retreatPath: {
            text: "You retreat carefully, but the pulsating walls seem to close in. Suddenly, the floor collapses, sending you into an abyss.",
            choices: []
        },
        defendYourself: {
            text: "You grab a metal rod nearby and prepare to defend yourself. The footsteps grow louder, but a humanoid figure steps into the room, holding out a hand in peace.",
            choices: []
        },
        lookEscapeRoute: {
            text: "You search frantically and find a vent large enough to crawl through. It leads to the surface of the ship, where you see endless stars.",
            choices: []
        },
        returnHome: {
            text: "You initiate the coordinates, and the control room hums to life. The ship locks onto Earth and begins its journey home. You breathe a sigh of relief as familiar stars come into view.",
            choices: []
        },
        searchSystems: {
            text: "You decide to search other systems. The star map shows countless possibilities, and you set course for the nearest habitable planet. Adventure awaits.",
            choices: []
        },
        braceImpact: {
            text: "The ship crashes into a planet's atmosphere, burning up on entry. You are lost to the void.",
            choices: []
        },
        interactTerminal: {
            text: "The terminal displays schematics of the ship. You discover a hidden escape route and manage to flee moments before the ship self-destructs.",
            choices: []
        },
        exploreFurther: {
            text: "You decide to keep exploring the chamber. You approach the hearthbeat thrum and palce your hand on it. You feel a huge surge and you become one with the ship. You can see everything and with your newfound body decide to explore the galaxy.",
            choices: []
        }
    },

    'Medieval': {
        start: {
            text: "You wake up in a damp stone chamber, the air heavy with the smell of mildew and smoke. Faint torchlight flickers from a crack under the wooden door. A booming voice echoes: 'The chosen one stirs. Let the trial begin.' What will you do?",
            choices: [
                { text: "Search the chamber for anything useful", next: "searchChamber" },
                { text: "Call out to the voice", next: "callOutVoice" },
                { text: "Attempt to break down the door", next: "breakDoor" }
            ]
        },
        searchChamber: {
            text: "You search the chamber and find a rusted dagger hidden beneath a pile of straw. As you grasp it, the door creaks open, revealing a narrow, shadowy corridor. Distant whispers fill the air.",
            choices: [
                { text: "Step into the corridor cautiously", next: "corridor" },
                { text: "Hide in the chamber and observe", next: "hideInChamber" }
            ]
        },
        callOutVoice: {
            text: "You shout into the void, 'Who are you? Why am I here?' The voice answers, 'Prove yourself, or perish.' Suddenly, a robed figure appears behind the door, pointing toward a glowing runic altar.",
            choices: [
                { text: "Follow the figure's guidance", next: "followFigure" },
                { text: "Defy the figure and challenge them", next: "challengeFigure" }
            ]
        },
        breakDoor: {
            text: "You charge at the door, slamming into it with all your strength. It bursts open, but the sound of your escape echoes loudly. Heavy footsteps approach rapidly.",
            choices: [
                { text: "Run down the corridor", next: "runCorridor" },
                { text: "Confront whoever is coming", next: "confrontIntruder" }
            ]
        },
        corridor: {
            text: "The corridor is damp and lined with stone carvings of monstrous faces. Ahead, you see two paths: one leads to a brightly lit hall, the other to a dark, foreboding staircase.",
            choices: [
                { text: "Enter the brightly lit hall", next: "brightHall" },
                { text: "Descend the dark staircase", next: "darkStaircase" }
            ]
        },
        hideInChamber: {
            text: "You hide behind a crumbling pillar as shadows flicker through the doorway. A cloaked figure enters, scanning the room with a glowing orb in hand.",
            choices: [
                { text: "Stay hidden and wait", next: "hiddenWait" },
                { text: "Ambush the cloaked figure", next: "ambushFigure" }
            ]
        },
        followFigure: {
            text: "The robed figure gestures toward the runic altar. A series of glowing symbols appears, and the voice says: 'Prove your worth by deciphering the runes.' The symbols begin to pulse.",
            choices: [
                { text: "Attempt to solve the runes", next: "solveRunes" },
                { text: "Smash the altar in frustration", next: "smashAltar" }
            ]
        },
        challengeFigure: {
            text: "You shout at the figure, 'I am no pawn in your games!' The figure laughs, and the floor beneath you collapses, dropping you into a cavern filled with glowing crystals.",
            choices: [
                { text: "Explore the cavern", next: "exploreCavern" },
                { text: "Look for a way back up", next: "findWayUp" }
            ]
        },
        brightHall: {
            text: "The hall is filled with golden light and rows of gleaming suits of armor. As you step forward, one of the suits begins to move.",
            choices: [
                { text: "Approach the moving armor", next: "approachArmor" },
                { text: "Retreat and choose another path", next: "retreatPath" }
            ]
        },
        darkStaircase: {
            text: "The staircase winds downward, its steps slick with moss. At the bottom, you find a massive wooden door, etched with glowing runes.",
            choices: [
                { text: "Inspect the runes closely", next: "inspectRunes" },
                { text: "Push open the door", next: "pushDoor" }
            ]
        },
        hiddenWait: {
            text: "The cloaked figure seems to lose interest and leaves. You exhale in relief, but now hear distant chanting from another corridor.",
            choices: [
                { text: "Follow the chanting", next: "followChanting" },
                { text: "Search the chamber for another exit", next: "searchExit" }
            ]
        },
        ambushFigure: {
            text: "You leap at the cloaked figure with the rusted dagger. The figure lets out a screech, summoning others from the corridor. They overpower you, and the darkness claims you.",
            choices: []
        },
        solveRunes: {
            text: "You carefully decipher the runes, and the altar opens, revealing a golden chalice. The voice proclaims, 'You are worthy. The trial is complete.'",
            choices: []
        },
        smashAltar: {
            text: "You smash the altar, and the glowing runes fade. The voice sighs, 'Unworthy.' The chamber begins to collapse, and you narrowly escape through a hidden passage.",
            choices: []
        },
        exploreCavern: {
            text: "The cavern is filled with glowing crystals that hum softly. As you touch one, an image of a distant castle fills your mind.",
            choices: []
        },
        findWayUp: {
            text: "You climb a series of jagged rocks and find a hidden staircase leading back to the surface. As you emerge, the robed figure awaits, unimpressed by your escape.",
            choices: []
        },
        approachArmor: {
            text: "The suit of armor steps forward and kneels, offering you a shining sword. The voice says, 'You have proven your courage.'",
            choices: []
        },
        retreatPath: {
            text: "You retreat carefully, but the hall seems to shift and close behind you. You find yourself back at the start of the corridor, disoriented but alive.",
            choices: []
        },
        inspectRunes: {
            text: "You study the runes and discover they represent an ancient incantation. As you speak the words, the door creaks open, revealing a treasure-filled chamber.",
            choices: []
        },
        pushDoor: {
            text: "You push open the door, but a trap triggers. Arrows rain down from above, and your journey ends in the shadows.",
            choices: []
        },
        followChanting: {
            text: "You follow the chanting to a hidden ritual. The figures stop and offer you a choice: join them or face their wrath.",
            choices: [
                { text: "Join the ritual", next: "joinRitual" },
                { text: "Refuse and fight", next: "refuseRitual" }
            ]
        },
        searchExit: {
            text: "You search the chamber and find a loose stone in the wall. Pushing it reveals a secret passage leading to the castle courtyard.",
            choices: []
        },
        joinRitual: {
            text: "You kneel before the figures, joining their ancient ritual. The power of the order flows through you, binding you to their cause.",
            choices: []
        },
        refuseRitual: {
            text: "You draw your weapon and refuse their offer. Though you fight bravely, their magic overwhelms you, and darkness claims your soul.",
            choices: []
        },
        runCorridor: {
            text: "You sprint down the corridor, narrowly avoiding the pursuing footsteps. You find yourself at the base of a staircase.",
            choices: [
                { text: "Ascend the staircase", next: "darkStaircase" }
            ]
        },
        confrontIntruder: {
            text: "You stand your ground as a heavily armored knight appears. They lunge at you, and the battle is fierce. Though valiant, you are struck down.",
            choices: []
        }
    },

    'Apocalyptic': {
        start: {
            text: "You wake up in the remnants of a crumbling building, sunlight streaming through a hole in the roof. The air smells of ash and decay. In the distance, you hear faint gunfire. A voice crackles over a nearby radio: 'Survivor detected. Proceed with caution.' What will you do?",
            choices: [
                { text: "Search the building for supplies", next: "searchBuilding" },
                { text: "Respond to the radio", next: "respondRadio" },
                { text: "Try to escape the building", next: "escapeBuilding" }
            ]
        },
        searchBuilding: {
            text: "You search the building and find a rusted knife and a half-empty bottle of water. Suddenly, you hear footsteps echoing from the stairwell.",
            choices: [
                { text: "Confront whoever is coming", next: "confrontStairwell" },
                { text: "Hide and observe", next: "hideAndObserve" }
            ]
        },
        respondRadio: {
            text: "You pick up the radio and say, 'Who is this? What do you want?' The voice replies, 'Stay where you are, survivor. Help is coming.' Moments later, a drone flies past the broken window.",
            choices: [
                { text: "Wait for the drone to return", next: "waitDrone" },
                { text: "Run before they arrive", next: "runFromDrone" }
            ]
        },
        escapeBuilding: {
            text: "You dash to the exit and find a shattered door. Outside, the street is desolate, with abandoned cars and rubble everywhere. Distant shadows dart between the wreckage.",
            choices: [
                { text: "Head toward the shadows", next: "approachShadows" },
                { text: "Search the abandoned cars", next: "searchCars" }
            ]
        },
        confrontStairwell: {
            text: "You step into the stairwell and see a ragged figure holding a pipe. They freeze when they see you, their face grimy and desperate.",
            choices: [
                { text: "Attempt to talk to them", next: "talkToFigure" },
                { text: "Attack first to stay safe", next: "attackFigure" }
            ]
        },
        hideAndObserve: {
            text: "You duck behind a crumbled wall and watch as a group of scavengers enters the building. They rummage through the debris, muttering about supplies.",
            choices: [
                { text: "Sneak past them", next: "sneakPast" },
                { text: "Wait and follow them", next: "followScavengers" }
            ]
        },
        waitDrone: {
            text: "The drone hovers outside, scanning the building. Moments later, a group of armored soldiers enters, weapons raised. 'Hands up!' one shouts.",
            choices: [
                { text: "Surrender to them", next: "surrenderSoldiers" },
                { text: "Fight back", next: "fightSoldiers" }
            ]
        },
        runFromDrone: {
            text: "You bolt down the stairs as the drone buzzes after you. Outside, its spotlight searches frantically as you dive into an alleyway.",
            choices: [
                { text: "Find a place to hide", next: "findHidingSpot" },
                { text: "Keep running", next: "keepRunning" }
            ]
        },
        approachShadows: {
            text: "You cautiously approach the shadows and find a small group of survivors. They stare at you warily, weapons drawn.",
            choices: [
                { text: "Ask to join them", next: "joinSurvivors" },
                { text: "Attack to take their supplies", next: "attackSurvivors" }
            ]
        },
        searchCars: {
            text: "You search the abandoned cars and find a crowbar and a can of food. Suddenly, you hear growls behind you and see feral dogs approaching.",
            choices: [
                { text: "Climb onto a car", next: "climbCar" },
                { text: "Fight the dogs", next: "fightDogs" }
            ]
        },
        talkToFigure: {
            text: "You hold up your hands and say, 'I’m not a threat.' The figure relaxes slightly and says, 'There’s nothing here. You’re wasting your time.'",
            choices: [
                { text: "Ask them to team up", next: "teamUp" },
                { text: "Leave them and move on", next: "moveOn" }
            ]
        },
        attackFigure: {
            text: "You lunge at the figure with your knife. They fight back fiercely, but you manage to wound them. They collapse, breathing heavily, as you take their supplies.",
            choices: []
        },
        sneakPast: {
            text: "You sneak past the scavengers, careful not to make a sound. Outside, you spot a working motorcycle hidden beneath a tarp.",
            choices: [
                { text: "Take the motorcycle and leave", next: "takeMotorcycle" },
                { text: "Search the area further", next: "searchArea" }
            ]
        },
        followScavengers: {
            text: "You follow the scavengers as they leave the building. They lead you to a hidden bunker filled with supplies.",
            choices: [
                { text: "Sneak into the bunker", next: "sneakBunker" },
                { text: "Reveal yourself to them", next: "revealSelf" }
            ]
        },
        surrenderSoldiers: {
            text: "You raise your hands as the soldiers take you into custody. They lead you to a fortified base where you’re interrogated but eventually offered safety.",
            choices: []
        },
        fightSoldiers: {
            text: "You grab the nearest weapon and fight back. The soldiers overwhelm you quickly, and your journey ends in darkness.",
            choices: []
        },
        findHidingSpot: {
            text: "You hide beneath a pile of debris as the drone buzzes past. Hours later, you emerge, cold and hungry, into the desolate streets.",
            choices: []
        },
        keepRunning: {
            text: "You keep running until your legs give out. The drone eventually loses interest, but you collapse, exhausted, in an abandoned subway station.",
            choices: []
        },
        joinSurvivors: {
            text: "You ask to join the group. After some hesitation, they agree and welcome you. Together, you navigate the dangerous ruins.",
            choices: []
        },
        attackSurvivors: {
            text: "You attack the group, but they’re prepared. Their superior numbers overwhelm you, and your journey ends in the ruins.",
            choices: []
        },
        climbCar: {
            text: "You climb onto a car, fending off the dogs until they lose interest. Exhausted, you continue searching the area for supplies.",
            choices: []
        },
        fightDogs: {
            text: "You face the dogs with your crowbar, managing to drive them away. Wounded but alive, you press on.",
            choices: []
        },
        teamUp: {
            text: "The figure agrees to join you. Together, you scavenge supplies and share stories of survival in the ruined world.",
            choices: []
        },
        moveOn: {
            text: "You decide to leave the figure behind and continue your journey alone. The road ahead is dangerous but full of possibilities.",
            choices: []
        },
        takeMotorcycle: {
            text: "You take the motorcycle and speed off into the wasteland, leaving the scavengers and their dangers behind.",
            choices: []
        },
        searchArea: {
            text: "You search the area further and find a stash of supplies hidden in a nearby building. Your perseverance pays off.",
            choices: []
        },
        sneakBunker: {
            text: "You sneak into the bunker and grab as many supplies as you can carry. As you leave, you hear the scavengers returning.",
            choices: []
        },
        revealSelf: {
            text: "You reveal yourself to the scavengers and offer to trade. After some tense negotiation, they let you leave with a few supplies.",
            choices: []
        }
    }
};

function restart() {
    document.getElementById('story-container').style.display = 'none';
    document.getElementById('genre-selection').style.display = 'block';
    document.getElementById('choice-buttons').innerHTML = ''; // Clear old buttons
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

// Function to update the story
function updateStory(node, genre) {
    const storyText = document.getElementById('story-text');
    const choiceButtons = document.getElementById('choices-buttons');

    if (!node) {
        storyText.textContent = "An error occurred. Path is missing!";
        choiceButtons.innerHTML = '';
        const restartBtn = document.createElement('button');
        restartBtn.textContent = "Restart";
        restartBtn.onclick = restart;
        choiceButtons.appendChild(restartBtn);
        return;
    }

    storyText.textContent = node.text;

    choiceButtons.innerHTML = ''; // Clear previous choices

    // If there are choices, display them
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
                    choiceButtons.innerHTML = '';
                    const restartBtn = document.createElement('button');
                    restartBtn.textContent = "Restart";
                    restartBtn.onclick = restart;
                    choiceButtons.appendChild(restartBtn);
                }
            };
            choiceButtons.appendChild(button);
        });
    } else {
        // If there are no choices left (end of story), show the restart button
        const restartBtn = document.createElement('button');
        restartBtn.textContent = "Restart";
        restartBtn.onclick = restart;
        choiceButtons.appendChild(restartBtn);
    }
}




document.addEventListener("DOMContentLoaded", function () {
    const storyContainer = document.getElementById("story-container");
    const storyText = document.getElementById("story-text");
    const choicesDiv = document.getElementById("choices");

    const genreSelection = document.getElementById("genre-selection");

    let currentTheme = "Sci-Fi";
    let currentScene = "start";

    // Define color schemes for each theme
    const themeColors = {
        "Sci-Fi": { background: "#00bfff", color: "#000000" },
        "Medieval": { background: "#8B4513", color: "#fff8dc" },
        "Apocalyptic": { background: "#808080", color: "#ff6347" }
    };

    // Function to start the story based on selected genre
    function startStory(theme) {
        genreSelection.style.display = "none"; // Hide genre selection
        storyContainer.style.display = "block"; // Show story container
        currentTheme = theme;
        storyContainer.setAttribute("data-theme", theme);
        loadScene(currentScene); // Start the story
    }

    // Function to load a story scene
    function loadScene(sceneKey) {
        const scene = stories[currentTheme][sceneKey];
        storyText.textContent = scene.text;

        // Clear old choices (if any)
        choicesDiv.innerHTML = "";

        // Get the color scheme for the current theme
        const colors = themeColors[currentTheme];

        scene.choices.forEach(choice => {
            const button = document.createElement("button");
            button.textContent = choice.text;
            button.className = "choice-button";

            // Apply the button's color based on the current theme
            button.style.backgroundColor = colors.background;
            button.style.color = colors.color;

            button.onclick = () => loadScene(choice.next);
            choicesDiv.appendChild(button);
        });
    }

    // Function to change the theme
    function changeTheme(theme) {
        currentTheme = theme;
        storyContainer.setAttribute("data-theme", theme);
        currentScene = "start"; // Reset the story to the start for the new theme
        loadScene(currentScene);
    }

    // Add event listeners to theme buttons
    document.getElementById("theme-sci-fi").onclick = () => changeTheme("Sci-Fi");
    document.getElementById("theme-medieval").onclick = () => changeTheme("Medieval");
    document.getElementById("theme-apocalyptic").onclick = () => changeTheme("Apocalyptic");

    // Export startStory to the global scope so it can be called on genre selection
    window.startStory = startStory;
});
