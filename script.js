class Storyteller {
    constructor() {
        this.stories = {
            sciFi: {
                title: "Galactic Odyssey",
                plot: [
                    {
                        text: "You are a space explorer on a mission to find a new habitable planet for humanity. The onboard AI detects an anomaly in the form of a mysterious signal. Do you:",
                        choices: [
                            { text: "Investigate the mysterious signal", next: 1 },
                            { text: "Continue the journey to the next star system", next: 2 }
                        ]
                    },
                    {
                        text: "The signal leads you to an abandoned spaceship drifting in space. A distress call is playing on repeat. Do you:",
                        choices: [
                            { text: "Board the abandoned spaceship and investigate", next: 3 },
                            { text: "Try to establish contact with the ship's AI", next: 4 }
                        ]
                    },
                    {
                        text: "The spaceship's AI reveals that the crew was killed by a space parasite, but it offers valuable technology. Do you:",
                        choices: [
                            { text: "Accept the technology and continue the mission", next: 5 },
                            { text: "Refuse the technology, fearing it may be dangerous", next: 6 }
                        ]
                    },
                    {
                        text: "While exploring an uncharted planet, you discover strange ruins. As you investigate, an alien race appears. Do you:",
                        choices: [
                            { text: "Try to communicate peacefully", next: 7 },
                            { text: "Activate your weapons and prepare for a fight", next: 8 }
                        ]
                    },
                    {
                        text: "You find yourself on a barren world, surrounded by strange energy storms. Do you:",
                        choices: [
                            { text: "Set up a base and try to study the energy storms", next: 9 },
                            { text: "Leave the planet immediately, fearing it may be dangerous", next: 10 }
                        ]
                    },
                    {
                        text: "A mysterious alien race offers to help you find a new planet. They warn of a greater threat ahead. Do you:",
                        choices: [
                            { text: "Accept their help and trust them", next: 11 },
                            { text: "Reject their offer, trusting your own technology", next: 12 }
                        ]
                    },
                    {
                        text: "You find the perfect planet, but it is already inhabited by hostile aliens. The fate of your crew depends on the choices you make. Do you:",
                        choices: [
                            { text: "Attempt diplomacy with the aliens", next: 13 },
                            { text: "Launch a full-scale attack on the alien base", next: 14 }
                        ]
                    },
                    {
                        text: "You discover a black hole on the edge of the galaxy. It’s a direct threat to the mission. Do you:",
                        choices: [
                            { text: "Attempt to navigate around the black hole", next: 15 },
                            { text: "Try to study the black hole, risking everything", next: 16 }
                        ]
                    },
                    // Ending Paths
                    {
                        text: "You and your crew manage to find a suitable planet, but the galaxy is changing. Your future is uncertain.",
                        choices: [
                            { text: "Live peacefully on the new world", next: 'ending_1' },
                            { text: "Leave to explore the unknown, risking further dangers", next: 'ending_2' }
                        ]
                    },
                    {
                        text: "Your encounter with hostile aliens results in a galactic war. Despite victory, you lose much of your crew.",
                        choices: [
                            { text: "Return to Earth with your findings", next: 'ending_3' },
                            { text: "Continue exploring space, knowing the risks", next: 'ending_4' }
                        ]
                    },
                    {
                        text: "You reject the alien help and find a new home, but your technology backfires, and the colony faces extinction.",
                        choices: [
                            { text: "Try to salvage your home planet", next: 'ending_5' },
                            { text: "Start anew on a different world", next: 'ending_6' }
                        ]
                    },
                    // More complex endings
                    {
                        text: "You discover a hostile alien fleet, but you manage to form an alliance with them. However, a greater galactic empire threatens everyone.",
                        choices: [
                            { text: "Join the alien fleet in defense of the galaxy", next: 'ending_7' },
                            { text: "Defend humanity's independence and fight the empire", next: 'ending_8' }
                        ]
                    }
                ]
            },
            
            medieval: {
                title: "Quest for the Lost Kingdom",
                plot: [
                    {
                        text: "You are a knight entrusted with the mission to find the Lost Kingdom. The journey will be perilous. Do you:",
                        choices: [
                            { text: "Consult the village elder for advice", next: 1 },
                            { text: "Set off into the dark forest immediately", next: 2 }
                        ]
                    },
                    {
                        text: "The elder warns you of an ancient curse and speaks of a hidden map. Do you:",
                        choices: [
                            { text: "Search the elder's house for clues", next: 3 },
                            { text: "Ignore the elder’s warning and head to the forest", next: 4 }
                        ]
                    },
                    {
                        text: "In the elder's house, you find a map hidden in a secret drawer. Do you:",
                        choices: [
                            { text: "Follow the map's directions", next: 5 },
                            { text: "Burn the map, fearing it might be cursed", next: 6 }
                        ]
                    },
                    {
                        text: "As you venture deeper into the forest, the trees grow dark and twisted. You hear the sound of heavy breathing. Do you:",
                        choices: [
                            { text: "Light a torch and proceed carefully", next: 7 },
                            { text: "Ignore the noise and continue walking", next: 8 }
                        ]
                    },
                    {
                        text: "You encounter a massive dragon guarding the entrance to an ancient temple. Do you:",
                        choices: [
                            { text: "Fight the dragon", next: 9 },
                            { text: "Attempt to talk to the dragon", next: 10 }
                        ]
                    },
                    // Ending paths
                    {
                        text: "You successfully slay the dragon, but you are severely injured. Inside the temple, you find the Lost Kingdom's treasure, but it's cursed.",
                        choices: [
                            { text: "Take the treasure and return home", next: 'ending_1' },
                            { text: "Leave the treasure behind, returning empty-handed", next: 'ending_2' }
                        ]
                    },
                    {
                        text: "The dragon speaks of a prophecy, and with its guidance, you discover the Lost Kingdom's secrets. You return as a hero, but an ancient darkness follows.",
                        choices: [
                            { text: "Unite the kingdoms to fight the darkness", next: 'ending_3' },
                            { text: "Face the darkness alone", next: 'ending_4' }
                        ]
                    }
                ]
            },
            
            apocalyptic: {
                title: "Survivor's Dilemma",
                plot: [
                    {
                        text: "The world as you knew it has ended. You are one of the few survivors in a desolate wasteland. Do you:",
                        choices: [
                            { text: "Search for food in the abandoned city", next: 1 },
                            { text: "Look for other survivors", next: 2 }
                        ]
                    },
                    {
                        text: "You find a small stash of food in a ruined supermarket, but the building is crawling with zombies. Do you:",
                        choices: [
                            { text: "Fight the zombies and take the food", next: 3 },
                            { text: "Leave the food and retreat to safety", next: 4 }
                        ]
                    },
                    {
                        text: "You hear voices nearby. Do you:",
                        choices: [
                            { text: "Investigate the voices", next: 5 },
                            { text: "Hide and observe from a distance", next: 6 }
                        ]
                    },
                    {
                        text: "You find a group of survivors who offer to team up. However, one of them seems suspicious. Do you:",
                        choices: [
                            { text: "Trust them and join their group", next: 7 },
                            { text: "Refuse and continue alone", next: 8 }
                        ]
                    },
                    // Ending paths
                    {
                        text: "The group betrays you, and you barely escape with your life. Now, alone, you must rebuild your survival strategy.",
                        choices: [
                            { text: "Continue to fight for survival", next: 'ending_1' },
                            { text: "Find refuge in an underground shelter", next: 'ending_2' }
                        ]
                    },
                    {
                        text: "You find a safe haven with the group, but you realize the world outside is still full of dangers. Do you:",
                        choices: [
                            { text: "Stay in the safe zone", next: 'ending_3' },
                            { text: "Venture outside to find more survivors", next: 'ending_4' }
                        ]
                    }
                ]
            },
            
        };
        this.currentStory = null; // To track the active story
    }

     // Start the story based on the selected genre
     startStory(storyType) {
        // Hide the initial genre choices
        const genreChoices = document.querySelectorAll('.choice-btn');
        genreChoices.forEach(btn => btn.style.display = 'none');

        // Show the story plot and choices
        this.currentStory = this.stories[storyType];  // Store the current story
        this.currentPlotIndex = 0;  // Start from the first plot
        this.displayPlot(this.currentStory.plot[this.currentPlotIndex]);  // Display the first plot
    }

    // Display the current plot and choices
    displayPlot(plot) {
        // Update the story text
        document.getElementById('story-text').textContent = plot.text;

        // Remove any existing story buttons (choices)
        const choiceButtonsContainer = document.getElementById('choice-buttons');
        choiceButtonsContainer.innerHTML = ''; 

        // Create new buttons based on the current plot's choices
        plot.choices.forEach(choice => {
            const button = document.createElement('button');
            button.classList.add('choice-btn');
            button.textContent = choice.text;
            button.onclick = () => this.handleChoice(choice.next); // Add event listener to handle the next plot
            choiceButtonsContainer.appendChild(button);
        });
    }

    // Handle the user's choice and move to the next plot
    handleChoice(nextPlotIndex) {
        this.currentPlotIndex = nextPlotIndex;
        const nextPlot = this.currentStory.plot[this.currentPlotIndex];
        this.displayPlot(nextPlot);
    }
}

// Initialize the Storyteller class
const storyteller = new Storyteller();

// Handle genre selection (initial buttons)
document.querySelectorAll('.choice-btn').forEach(button => {
    button.addEventListener('click', (event) => {
        const genre = event.target.getAttribute('data-choice');
        storyteller.startStory(genre);  // Start the chosen story
    });
});