class Storyteller {
    constructor() {
        this.stories = {
            sciFi: {
                title: "Galactic Odyssey",
                plot: [
                    {
                        text: "You are a space explorer on a mission to find a new habitable planet. Do you:",
                        choices: [
                            { text: "Investigate a mysterious signal", next: 1 },
                            { text: "Continue to the next star system", next: 2 }
                        ]
                    },
                    {
                        text: "The signal leads you to an abandoned spaceship. Do you:",
                        choices: [
                            { text: "Board the spaceship", next: 3 },
                            { text: "Call for backup", next: 4 }
                        ]
                    },
                    {
                        text: "You arrive at a barren planet. Do you:",
                        choices: [
                            { text: "Set up a base", next: 5 },
                            { text: "Explore the surface", next: 6 }
                        ]
                    },
                    // Additional plot points...
                ]
            },
            medieval: {
                title: "Quest for the Lost Kingdom",
                plot: [
                    {
                        text: "You are a knight on a quest to find the lost kingdom. Do you:",
                        choices: [
                            { text: "Consult the village elder", next: 1 },
                            { text: "Set off into the forest", next: 2 }
                        ]
                    },
                    {
                        text: "The elder tells you of a hidden map. Do you:",
                        choices: [
                            { text: "Search the elder's house", next: 3 },
                            { text: "Ignore the elder's advice", next: 4 }
                        ]
                    },
                    {
                        text: "The forest is dark and eerie. Do you:",
                        choices: [
                            { text: "Light a torch", next: 5 },
                            { text: "Proceed in darkness", next: 6 }
                        ]
                    },
                    // Additional plot points...
                ]
            },
            apocalyptic: {
                title: "Survivor's Dilemma",
                plot: [
                    {
                        text: "The world has ended, and you are one of the few survivors. Do you:",
                        choices: [
                            { text: "Search for food", next: 1 },
                            { text: "Look for other survivors", next: 2 }
                        ]
                    },
                    {
                        text: "You find a can of food. Do you:",
                        choices: [
                            { text: "Eat it immediately", next: 3 },
                            { text: "Save it for later", next: 4 }
                        ]
                    },
                    {
                        text: "You hear voices in the distance. Do you:",
                        choices: [
                            { text: "Investigate the voices", next: 5 },
                            { text: "Hide and observe", next: 6 }
                        ]
                    },
                    // Additional plot points...
                ]
            }
        };
        this.currentStory = null; // To track the active story
    }

    // Initialize genre selection
    initialize() {
        document.querySelectorAll('.choice-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                const genre = e.target.getAttribute('data-choice');
                this.startStory(genre);
            });
        });
    }

    // Start the selected story
    startStory(storyType) {
        this.currentStory = this.stories[storyType];
        document.getElementById('story-container').style.display = 'none';
        document.getElementById('choices-container').style.display = 'block';
        this.displayPlot(this.currentStory.plot[0]);
    }

    // Display plot and choices
    displayPlot(plot) {
        document.getElementById('story-text').innerText = plot.text;
        const choicesContainer = document.getElementById('choices');
        choicesContainer.innerHTML = ''; // Clear previous choices

        plot.choices.forEach(choice => {
            const button = document.createElement('button');
            button.innerText = choice.text;
            button.onclick = () => this.handleChoice(choice.next);
            choicesContainer.appendChild(button);
        });
    }

    // Handle user choice and progress to the next plot
    handleChoice(nextPlotIndex) {
        const nextPlot = this.currentStory.plot[nextPlotIndex];
        this.displayPlot(nextPlot);
    }
}

// Initialize the Storyteller instance
const storyteller = new Storyteller();
storyteller.initialize();
