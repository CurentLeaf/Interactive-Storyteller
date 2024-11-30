class Storyteller {
    constructor() {
        this.stories = {
            sciFi: {
                title: "Galactic Odyssey",
                plot: [
                    {
                        text: "You are a renowned space explorer tasked with finding a new home for humanity. Your ship detects a mysterious signal emanating from a distant nebula. As you approach, the AI on board warns of potential danger. Do you:",
                        choices: [
                            { text: "Investigate the mysterious signal", next: 1 },
                            { text: "Ignore it and continue to the next star system", next: 2 }
                        ]
                    },
                    {
                        text: "The signal leads you to an abandoned, ancient spaceship. Its hull is covered in unknown alien markings, and a faint distress signal is playing on repeat. Do you:",
                        choices: [
                            { text: "Board the spaceship and investigate", next: 3 },
                            { text: "Attempt to establish contact from a safe distance", next: 4 }
                        ]
                    },
                    {
                        text: "You bypass the signal and head to a nearby habitable-looking planet. The atmosphere is breathable, but strange, luminous plants cover the surface. Do you:",
                        choices: [
                            { text: "Analyze the plants for resources", next: 5 },
                            { text: "Set up a base and explore the terrain", next: 6 }
                        ]
                    },
                    {
                        text: "Inside the alien ship, you find evidence of a long-dead species. Strange technology hums softly in the control room, possibly containing valuable data. Do you:",
                        choices: [
                            { text: "Extract the data for analysis", next: 7 },
                            { text: "Leave before you accidentally trigger something dangerous", next: 8 }
                        ]
                    },
                    {
                        text: "The ship's AI establishes contact but warns you not to approach. It claims the ship is cursed, with a deadly virus aboard. Do you:",
                        choices: [
                            { text: "Leave the ship and continue your journey", next: 9 },
                            { text: "Attempt to extract the virus data for scientific purposes", next: 10 }
                        ]
                    },
                    // Endings
                    { text: "You discover the data contains coordinates to a utopia-like planet, leading humanity to salvation. You are hailed as a hero.", choices: [] }, // 7
                    { text: "The ship self-destructs as you leave, but you escape with your life and warn others of its danger.", choices: [] }, // 8
                    { text: "The virus data proves too dangerous to handle. Your ship's systems fail, leaving you stranded in the void.", choices: [] }, // 10
                    { text: "You set up a base and uncover an alien relic, securing humanity's future. A golden age begins.", choices: [] }, // 6
                    { text: "The luminous plants turn out to be hostile organisms. You narrowly escape back to your ship.", choices: [] } // 5
                ]
            },
            medieval: {
                title: "Quest for the Lost Kingdom",
                plot: [
                    {
                        text: "You are a knight entrusted with finding the Lost Kingdom, a realm of great riches and ancient power. The king warns you that the path will be fraught with danger. As you leave the castle, your options are clear. Do you:",
                        choices: [
                            { text: "Consult the wise village elder for guidance", next: 1 },
                            { text: "Set off immediately into the uncharted forest", next: 2 }
                        ]
                    },
                    {
                        text: "The elder tells you about an ancient map hidden in the ruins near the village. The map supposedly leads to the kingdom, but it is guarded by a ferocious dragon. Do you:",
                        choices: [
                            { text: "Seek out the map in the ruins", next: 3 },
                            { text: "Head directly into the forest, avoiding the dragon", next: 4 }
                        ]
                    },
                    {
                        text: "The forest is dark and eerie, filled with strange sounds. Suddenly, you hear the growl of a wolf pack. Do you:",
                        choices: [
                            { text: "Climb a tree to avoid them", next: 5 },
                            { text: "Draw your sword and face them", next: 6 }
                        ]
                    },
                    {
                        text: "The dragon guarding the ruins spots you immediately. Its eyes burn with anger, and it prepares to attack. Do you:",
                        choices: [
                            { text: "Attempt to outsmart the dragon by using its environment against it", next: 7 },
                            { text: "Charge forward and fight the dragon head-on", next: 8 }
                        ]
                    },
                    // Endings
                    { text: "The dragon is defeated, and the map leads you to the Lost Kingdom. You are celebrated as a hero.", choices: [] }, // 7
                    { text: "The dragon overwhelms you. Your quest ends in fiery defeat.", choices: [] }, // 8
                    { text: "The wolf pack retreats, and you find a hidden path leading to the Lost Kingdom.", choices: [] }, // 6
                    { text: "The wolves catch you, and your adventure ends prematurely.", choices: [] } // 5
                ]
            },
            apocalyptic: {
                title: "Survivor's Dilemma",
                plot: [
                    {
                        text: "The world is in ruins, and survival is your only goal. You have a small group of fellow survivors. Supplies are running low. Do you:",
                        choices: [
                            { text: "Search the nearby abandoned city for supplies", next: 1 },
                            { text: "Lead your group to a safer, more remote location", next: 2 }
                        ]
                    },
                    // More plot points...
                ]
            }
        };
    }

    startStory(storyType) {
        document.querySelectorAll('.choice-btn').forEach(btn => btn.style.display = 'none');
        this.currentStory = this.stories[storyType];
        this.currentPlotIndex = 0;
        this.displayPlot(this.currentStory.plot[this.currentPlotIndex]);
    }

    displayPlot(plot) {
        document.getElementById('story-text').textContent = plot.text;
        const choiceButtonsContainer = document.getElementById('choice-buttons');
        choiceButtonsContainer.innerHTML = '';
        plot.choices.forEach(choice => {
            const button = document.createElement('button');
            button.classList.add('choice-btn');
            button.textContent = choice.text;
            button.onclick = () => this.handleChoice(choice.next);
            choiceButtonsContainer.appendChild(button);
        });
    }

    handleChoice(nextPlotIndex) {
        this.currentPlotIndex = nextPlotIndex;
        this.displayPlot(this.currentStory.plot[this.currentPlotIndex]);
    }
}

const storyteller = new Storyteller();

document.querySelectorAll('.choice-btn').forEach(button => {
    button.addEventListener('click', event => {
        const genre = event.target.getAttribute('data-choice');
        storyteller.startStory(genre);
    });
});
