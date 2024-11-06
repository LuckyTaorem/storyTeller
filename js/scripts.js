function replaceNewlinesWithBreaks(text) {
    return text.replace(/\n/g, '<br>');
}
if(!story)
    story={};
var historyStack = []; // Stack to keep track of the history of nodes
var utterance = null; // Store the current utterance for stopping or pausing
var isPaused = false; // Track if narration is paused
var narrationActive = false; // Track if narration is currently active
var flag=0;
var currentNode = null;
function showStory(node) {
    currentNode = node;
    const storyText = document.getElementById("story-text");
    const choicesDiv = document.getElementById("choices");
    const storyImage = document.getElementById("story-image"); // Main story image
    const startNarrationButton = document.getElementById("start-narration"); // Start button
    const stopNarrationButton = document.getElementById("stop-narration"); // Stop button
    const pauseNarrationButton = document.getElementById("pause-narration"); // Pause button

    // Use the replaceNewlinesWithBreaks function to convert newlines to <br>
    let formattedText = replaceNewlinesWithBreaks(story[node].text);

    // Check if the node is the start node to display the title
    if (node === "Start") {
        formattedText = `<h1>${story[node].title}</h1>` + formattedText;
    }

    // Check if the text ends with "THE END"
    if (formattedText.trim().endsWith("THE END")) {
        formattedText = formattedText.replace(/THE END$/, '<img src="../images/theEnd.svg" alt="Description of SVG" width="50%" style="display:block;margin:0px auto;">');
    }

    storyText.classList.remove('fade-in'); // Remove the class if it's already there to reset it
    storyImage.classList.remove('slide-right');
    choicesDiv.classList.remove('fade-in')
    void storyText.offsetWidth; // Trigger reflow to restart the animation
    void storyImage.offsetWidth; // Trigger reflow to restart the animation
    void choicesDiv.offsetWidth;
    storyImage.classList.add('slide-right');
    storyText.classList.add('fade-in');
    choicesDiv.classList.add('fade-in');

    storyText.innerHTML = formattedText; // Set the formatted text
    choicesDiv.innerHTML = '';

    // Stop any ongoing narration when moving to the next node
    stopNarration();

    // Store choice buttons in an array to access by keypress later
    const choiceButtons = [];

    // Display choices
    story[node].choices.forEach((choice, index) => {
        const button = document.createElement("button");
        button.textContent = `${index + 1}. ${choice.text}`;
        button.id = `choice_btn_${index + 1}`;
        button.className="choice_btn";
        button.onclick = () => {
            historyStack.push(node);
            showStory(choice.next);
            // Automatically narrate if narration is active
            if(flag==1){
                narrationActive=true;
            }
            console.log(narrationActive);
            if (narrationActive) {
                narrateText(story[choice.next].text);
            }
            updateButtonStates();
        };
        choicesDiv.appendChild(button);
    });

    // Add a "Go Back" button if there is a history
    if (historyStack.length > 0) {
        const backButton = document.createElement("button");
        backButton.textContent = "Go Back";
        backButton.id = "back_btn";
        backButton.onclick = () => {
            const lastNode = historyStack.pop(); // Pop the last node from the stack
            showStory(lastNode);
            // Automatically narrate if narration is active
            if(flag==1){
                narrationActive=true;
            }
            if (narrationActive) {
                narrateText(story[lastNode].text);
            }
            updateButtonStates();
        };
        choicesDiv.appendChild(backButton);
    }

    // Set the main image source
    if (story[node].image) {
        storyImage.src = story[node].image;
        storyImage.style.display = "block"; // Ensure the image is displayed
    } else {
        storyImage.style.display = "none"; // Hide the main image if none is available
    }

    // Update button states
    updateButtonStates();
}

function narrateText(text) {
    if (utterance) {
        stopNarration(); // Stop any ongoing narration before starting new
    }

    utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = speechSynthesis.getVoices()[121]; // Select the first voice (or a specific one based on your needs)
    utterance.pitch = 1; // Default pitch
    utterance.rate = 1; // Default rate

    // Event listener to stop narration once it's finished
    utterance.onend = () => {
        narrationActive = false; // Set narration active to false
        updateButtonStates(); // Update button states after narration ends
    };

    // Speak the text
    window.speechSynthesis.speak(utterance);
    narrationActive = true; // Set narration active to true
    updateButtonStates(); // Update button states immediately after starting
}

function stopNarration() {
    if (window.speechSynthesis.speaking) {
        // Stop any ongoing narration
        window.speechSynthesis.cancel();
    }
    // Reset button states
    narrationActive = false; // Set narration active to false
    updateButtonStates(); // Update button states
    isPaused = false; // Reset pause state
}

function pauseNarration() {
    if (window.speechSynthesis.speaking) {
        // Pause the current utterance
        window.speechSynthesis.pause();
        isPaused = true; // Set pause state
        updateButtonStates(); // Update button states
    }
}

function updateButtonStates() {
    document.getElementById("start-narration").disabled = narrationActive; // Disable start if active
    document.getElementById("stop-narration").disabled = !narrationActive; // Enable stop if active
    document.getElementById("pause-narration").disabled = !narrationActive || isPaused; // Enable pause only if active and not paused
}

document.getElementById("pause-narration").onclick = () => {
    flag=0;
    pauseNarration();
    document.getElementById("start-narration").disabled = !narrationActive;
};

document.getElementById("start-narration").onclick = () => {
    if (isPaused) {
        // Resume narration if paused
        window.speechSynthesis.resume();
        isPaused = false; // Reset pause state
        updateButtonStates(); // Update button states
    }
    else {
        // Start narration from the current text
        flag=1;
        const storyText = document.getElementById("story-text").innerText;
        narrateText(storyText);
    }
};

document.addEventListener("keydown", function(event) { 
    if (event.code === "Space") { 
        event.preventDefault(); // Prevent the default action (scrolling) 
        if (isPaused) {
            // Resume narration if paused
            window.speechSynthesis.resume();
            isPaused = false; // Reset pause state
            updateButtonStates(); // Update button states
        }
        else if(narrationActive){
            flag=0;
        pauseNarration();
        document.getElementById("start-narration").disabled = !narrationActive;
        } 
        else {
            // Start narration from the current text
            flag=1;
            const storyText = document.getElementById("story-text").innerText;
            narrateText(storyText);
        }
    } 
    if (event.ctrlKey && event.key === "s") {
        event.preventDefault();
        document.getElementById("stop-narration").click();
    }
    if (currentNode && story[currentNode].choices) {
        const key = event.key; // Get the key pressed
        let choiceIndex;

        // Check if the key is a number from the main row (1-9) or a Numpad number
        if (key >= '1' && key <= '9') {
            choiceIndex = parseInt(key) - 1; // Convert main number key to index
        } else if (event.code.startsWith('Numpad') && event.code.length === 7) {
            choiceIndex = parseInt(event.code.charAt(6)) - 1; // Convert Numpad key to index
        }

        // If the choice index is valid, simulate a click on the corresponding choice button
        if (choiceIndex >= 0 && choiceIndex < story[currentNode].choices.length) {
            document.getElementById(`choice_btn_${choiceIndex + 1}`).click();
        }
    }
    if (event.key === "Backspace") {
        event.preventDefault();
        document.getElementById('back_btn').click();
    }
    if (event.key === "Escape") { 
        event.preventDefault();
        showStory("Start");
    }
});

document.getElementById("stop-narration").onclick = () => {
    flag=0;
    stopNarration();
};

function resetNarration() {
    utterance = null; // Reset the utterance
    historyStack = []; // Clear the history stack
    stopNarration(); // Stop any ongoing narration
}

// document.addEventListener('DOMContentLoaded', (event) => {
//     resetNarration(); // Reset narration state
//     showStory("Start");
// });
