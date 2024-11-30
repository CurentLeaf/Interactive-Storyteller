const storyContainer = document.getElementById("story-container");
const storyText = document.getElementById("story-text");
const choicesContainer = document.getElementById('choices-container');

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
            "Enter the castle": "The massive gates creak open, revealing the grand entrance. A knight in shining armor steps forward and asks, 'What is your purpose here?'",
            "Go to the marketplace": "The marketplace bustles with activity. Merchants shout their wares, and the smell of fresh bread fills the air. A shady figure beckons you over to a stall with a large, ornate chest.",
            "Visit the tavern": "The tavern is filled with laughter, music, and the clinking of tankards. You approach the bar and see a mysterious figure sitting in the corner, watching you intently.",
        },
    },
    "Enter the castle": {
        start: "The knight gestures for you to follow him into the castle. Inside, the walls are adorned with tapestries of battles long past. He leads you to a large throne room where a wise wizard stands by the throne, looking at you intently.",
        choices: {
            "Speak to the wizard": "The wizard looks you over and says, 'Ah, I see you are not just an ordinary traveler. A task awaits you, if you choose to accept.'",
            "Approach the king": "The king, sitting on his grand throne, looks at you curiously. 'What brings you here?' he asks. 'I do not entertain commoners easily.'",
            "Inspect the room": "As you examine the room, you notice an intricately carved door hidden behind a large tapestry. It looks like it hasn't been opened in centuries.",
        },
    },
    "Speak to the wizard": {
        start: "The wizard smiles knowingly and says, 'A great danger is approaching the kingdom. Only one who is willing to risk everything can stop it. Will you accept the challenge?'",
        choices: {
            "Accept the challenge": "The wizard hands you a small, glowing crystal. 'Use this when you reach the dragon's lair,' he warns.",
            "Refuse and leave": "The wizard's smile fades. 'Very well,' he says, 'But the kingdom's fate will be sealed by your decision.'",
        },
    },
    "Accept the challenge": {
        start: "You follow the wizard's instructions and journey to the edge of the kingdom, where a dark forest looms. In the distance, you can see a towering mountain, and at its peak, the dragon's lair.",
        choices: {
            "Enter the dark forest": "The trees are twisted, and the air grows cold. You hear strange noises around you, and a shadow crosses your path.",
            "Climb the mountain directly": "The climb is treacherous, and the higher you get, the more dangerous the path becomes. You finally reach the entrance to the lair. The dragon's roar echoes from within.",
        },
    },
    "Enter the dark forest": {
        start: "The forest feels alive with danger. Suddenly, a huge figure emerges from the shadows—an ogre, towering over you.",
        choices: {
            "Fight the ogre": "You draw your sword, and the battle is fierce. With a final, powerful strike, you bring the ogre down. It falls with a thunderous crash.",
            "Try to talk to the ogre": "The ogre seems to understand you and speaks in broken words. He offers to guide you through the forest for a price.",
            "Run away": "You decide the ogre is too dangerous and flee, heart pounding. After running for what feels like hours, you stumble upon a hidden glade where an old woman sits by a fire.",
        },
    },
    "Fight the ogre": {
        start: "After a long and brutal fight, the ogre falls. You feel victorious but exhausted. As you rest, you notice a peculiar golden ring on the ogre's hand.",
        choices: {
            "Take the ring": "The moment you put the ring on your finger, you feel a strange warmth. The ring seems to hum with magic. Perhaps it will help you in the coming battle.",
            "Leave the ring": "You decide not to take the ring and continue on your journey. As you move forward, the forest feels even darker and more foreboding.",
        },
    },
    "Try to talk to the ogre": {
        start: "The ogre looks at you suspiciously before grinning. 'I'll guide you,' he says, 'but you'll owe me something valuable in return.' He gestures for you to follow.",
        choices: {
            "Agree to his terms": "He leads you through the dense forest, and after what seems like hours, you reach the edge of the dragon's lair. 'This is as far as I go,' he says.",
            "Refuse and attack him": "The ogre grows angry and swings his club. You barely dodge the blow and realize you're now in a fight for your life.",
        },
    },
    "Climb the mountain directly": {
        start: "The mountain is treacherous, and you're starting to feel the weight of the journey. At last, you reach the entrance to the dragon's lair. The smell of smoke fills the air.",
        choices: {
            "Enter the lair": "You step into the dark cavern. Suddenly, the ground shakes, and a massive dragon emerges from the shadows, its eyes glowing red.",
            "Wait outside": "You decide to wait for the dragon to come to you. The ground shakes again, and you hear the dragon's roar. It seems the dragon knows you're here.",
        },
    },
    "Enter the lair": {
        start: "The dragon roars as you enter the lair. Its scales gleam like molten gold, and its eyes narrow in on you. It speaks: 'You have come to face me, mortal. Do you think you can defeat me?'",
        choices: {
            "Fight the dragon": "You raise your sword and charge at the dragon. The battle is fierce, but you manage to land a powerful blow that sends the beast crashing to the ground.",
            "Offer the crystal": "You present the glowing crystal the wizard gave you. The dragon looks at it curiously, then nods. 'You have proven yourself worthy. I will spare your life.'",
            "Flee": "The dragon's roar shakes the very foundations of the lair. You turn and run, but the ground collapses beneath you. You fall into the abyss below.",
        },
    },
    "Fight the dragon": {
        start: "The fight is long and grueling. The dragon’s fire singes your armor, and you’re forced to retreat several times. But in the end, you land a final blow that brings the dragon to its knees.",
        choices: {
            "Take the dragon's hoard": "As the dragon dies, you take its hoard of treasure, including an ancient sword with strange runes. You feel its power flow into you.",
            "Leave the hoard and leave the lair": "You choose not to take the dragon's hoard. Instead, you exit the lair, the kingdom's fate secure, but your own destiny uncertain.",
        },
    },
    "Offer the crystal": {
        start: "The dragon looks at the glowing crystal and then at you. With a deep breath, it lowers its head and says, 'I have been bound by an ancient curse. I will not harm you.'",
        choices: {
            "Ask the dragon to help the kingdom": "The dragon agrees and promises to protect the kingdom from all threats. You return to the castle a hero, hailed by all.",
            "Leave the lair": "You leave the lair and return to the kingdom, but the wizard's prophecy haunts you. You wonder if you've made the right choice.",
        },
    },
    "Rare Ending - The Hidden Door": {
        start: "Behind the tapestry, you find a hidden door leading down into the castle’s dungeons. You discover a lost artifact that could change the kingdom’s future forever.",
        choices: {
            "Take the artifact": "You take the artifact, which grants you the ability to summon a powerful storm. You wield its power wisely, ruling the kingdom with wisdom and strength.",
            "Leave the artifact": "You decide the artifact’s power is too great for one person. You leave it behind, and as you return to the castle, the king recognizes your selflessness and rewards you handsomely.",
        },
    },
    "Rare Ending - The Dragon’s Secret": {
        start: "After slaying the dragon, you discover a hidden message in its hoard. It speaks of an ancient prophecy about a hero who will unite the warring kingdoms.",
        choices: {
            "Follow the prophecy": "You take the message and set off to unite the kingdoms, becoming a legend whose name is remembered for centuries.",
            "Ignore the prophecy": "You ignore the message, choosing instead to live a quiet life. However, the kingdoms continue to war, and the opportunity to bring peace slips away.",
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

// Set current story to null to await user's genre selection
let currentStoryType = null;
let currentStoryKey = null;

// Function to display the genre selection
function showStorySelection() {
    // Display a starting message
    storyText.innerHTML = "Welcome to the Interactive Storyteller! Choose your adventure:";

    // Clear previous choices
    choicesContainer.innerHTML = '';

    // Create buttons for story type selection
    const genres = ["sci-fi", "medieval", "apocalyptic"];
    genres.forEach((genre) => {
        const button = document.createElement('button');
        button.innerText = genre.charAt(0).toUpperCase() + genre.slice(1);
        button.onclick = () => startStory(genre);
        choicesContainer.appendChild(button);
    });
}

// Function to start the story based on the selected genre
function startStory(selectedGenre) {
    currentStoryType = selectedGenre;
    currentStoryKey = currentStoryType;  // Set the current story key based on the selected genre

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
        button.onclick = () => handleChoice(choice);
        choicesContainer.appendChild(button);
    }
}

// Function to handle when a user makes a choice
function handleChoice(choice) {
    const nextStoryKey = stories[currentStoryKey].choices[choice];
    if (nextStoryKey) {
        currentStoryKey = nextStoryKey;  // Update to the next story key
        displayStory(currentStoryKey);  // Display the next story
    }
}

// Initial call to show the genre selection
showStorySelection();
