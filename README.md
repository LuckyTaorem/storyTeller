# storyTeller
This interactive story application allows users to experience branching narratives, where they make choices to progress through different story paths. The story unfolds based on user selections, making each journey unique depending on the choices made.
# 1. Story Content Structure
  - Each story comprises nodes or scenes with specific content, such as text, images, and options for further choices.
  - The story begins at a “Start” node, and each node may have multiple choices leading to other nodes, creating a branching path.
  - The text in each node may include special endings, like “THE END,” which will trigger additional visual elements (e.g., an end image).
# 2. Dynamic Story Selection
  - The user can select from multiple stories using a dropdown menu, with each story represented by a separate JavaScript file.
  - Once a story is selected, the page loads the respective JavaScript file dynamically. This file defines the story's structure, including all nodes and choices.
# 3. Text and Image Display
  - Each story node has text and possibly an image.
  - Text content automatically converts line breaks to <br> tags for consistent formatting.
  - If an image is associated with a node, it appears in the content area. If no image is specified, the image element is hidden to maintain a clean layout.
# 4. Narration and Voice Controls
  - The framework integrates Web Speech API for text-to-speech narration, allowing the story to be read aloud.
  - Users have controls to start, stop, and pause narration:
  - Play/Pause: Toggles narration on and off.
  - Stop: Halts the narration and resets it.
  - Narration resumes automatically if active when navigating between nodes.
  - Keyboard shortcuts make the narration accessible without needing to click buttons.
# 5. Interactive Choice-Based Navigation
  - Each node provides choices for the user, guiding the next step in the story.
  - Choices appear as buttons; clicking a button transitions to the respective next node.
  - If there are two or more choices, users can select an option using the numeric keys or numpad (e.g., pressing “1” selects the first choice, “2” the second, and so on).
# 6. History and Navigation
  - The framework maintains a history stack that allows users to backtrack to previous nodes.
  - A Go Back button is added dynamically if there is a prior node, enabling users to retrace steps in the story.
# 7. Keyboard Shortcuts
  - ESC: To Restart the Story.
  - Space: Toggles play/pause for the narration.
  - Ctrl + S: Stops narration altogether.
  - Numpad/Numbers: Selects a choice directly.
  - Backspace: Moves back to the previous story node, leveraging the history stack.
# 8. Styling and Animations
  - Visual elements like text, choices, and images include animations:
  - Fade-in Animation: Applied to the story text and choices.
  - Slide Animation: Used for images to add visual engagement when transitioning to a new node.
  - A table of keyboard shortcuts appears alongside the story, detailing available commands, with the option to hide it once the user has started the story.
# 9. Reset and Refresh Options
  - A “Refresh the page” prompt appears after selecting a story to encourage users to restart and explore different choices.
  - The resetNarration() function resets narration settings and clears the history stack.
# Example Scenario Flow
### 1. Selecting a Story:
  - User selects “Imagination” from the dropdown. The story’s JavaScript file loads, initializing the story at the "Start" node.
### 2. Story Presentation:
  - The introductory text appears with options like “Go to the magical forest” or “Enter the dark cave.” The user chooses an option by pressing “1” or “2” on the keyboard.
### 3. Automatic Narration:
  - If the narration is active, it reads the current text aloud. The user can pause, resume, or stop the narration using the play/pause or stop buttons (or keyboard shortcuts).
### 4. Progressing with Choices:
  - As the user makes choices, they explore different story branches. Visual elements slide and fade to provide a smooth experience.
### 5. Going Back and Ending:
  - The “Go Back” button allows the user to revisit prior nodes and change choices if desired.
  - Upon reaching a “THE END” node, a special ending image appears, indicating the story’s conclusion.
  - This framework provides a versatile, immersive way to experience a branching narrative, with accessibility features and keyboard controls making it engaging for users.
