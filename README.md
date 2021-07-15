# ProjectZero

Wireframe
!["wireframe"](./relative/path/to/image)

//== User Stories ==//

1. The user lands on page with screen greeting --done
    - the user asks for their pets name
    - includes input box and 'adopt' button
    - should toggle between adopt and rename

2. On the right side of the page there should be 3 buttons --done
    - each one should have an progress bar 
    - Each should be labelled hunger, sleep, bored. 

3. Hunger button --done
    - Whent the progress bar is full the pet should be happy and full
        - Clicking the button should not let you feed pet --done
        - When not full the button should increment hunger levels by 1 every time

4. Sleep Button --done
    - Whent the progress bar is full the pet if fully awake
        - Button should not let you make them sleep
        - When sleepy the button should increment hunger levels by 1 everytime

5. Bored button --done
    - When the progress bar is full the pet should not be bored
        - button shouldnt work because pet is happy
    - When bored the button should allow you to increment boredom levels by 1 everytime

6. When the pet dies the photo should change and show a different pet
    - When the pet dies the game is over but you can still restart the game with a new pet.

7. Edit name button --done
    - Allows you to rename the pet

8. There should be a location to see the pets Age --done
    - pets age should increase every (i chose 1 min)

9. Pet should morph at certain ages
    - pet should go from baby to adult
    - while alive pet should cross the screen

//== Milestones ==//
- Create HTML layout --done
- Create pet object --done
- Create game Object --done
- event listener once user hits start timer should begin timer --done
- event listener to increase levels by 1 --done
- create timer --done
- create event listeners to decrease levels by 1 every second --done
    - when 0 game over or revive pet
- tie the reduce timer to update html element for the progress bar --done
- style the game
- pets age
- morph pet with age
- move across screen while alive


INCLUDED IN README --incomplete
- explanation of what the project is and why you made it
- user stories
- explanations of the technologies used
    - console.log
    - element inspector
    - alert statements
    - iPad for wireframe
- the approach taken
    - Object based approach (add more detail)
- installation instructions
- unsolved problems


    