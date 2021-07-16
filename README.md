# ProjectZero

Wireframe
!["wireframe"](/images/wireframe.jpg)

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

6. When the pet dies the photo should change and show a different pet --done
    - When the pet dies the game is over but you can still restart the game with a new pet.

7. Edit name button --done
    - Allows you to rename the pet

8. There should be a location to see the pets Age --done
    - pets age should increase every (i chose 1 min)

9. Pet should morph at certain ages --done
    - pet should go from baby to adult

10. while alive pet should cross the screen --done

//== Milestones ==//

- Create HTML layout --done
- Create pet object --done
- Create game Object --done
- event listener once user hits start timer should begin timer --done
- event listener to increase levels by 1 --done
- create timer --done
- create event listeners to decrease levels by 1 every second --done
- tie the reduce timer to update html element for the progress bar --done
- pets age --done
- morph pet with age --done
- move across screen while alive --done
- style the game --done

This game was created so that users can play with an online pet when they need to take a break from their lives. 

The technology used was console.log to check for errors and make sure the code was running properly, the element inspector to envision where i wanted to place the images and game content. I also used an iPad Pro to draw a mockup of how i envisioned my game. 

Approach taken:
Started with user stories then my wireframe. After i began adding content to the browser and then i began coding the javascript portion. Got stuck so went back and expanded and finished user stories, and added milestones. Then after understanding my steps I was able to easily finish the app. Now
I took an object oriented approach seperating my game into two objects, the pet object and the game object. In side the objects, i included both vanilla javascript and jQuery, inlcuding functions,  if else statements and several methods including toggle.


Installation Instuctions:
None, you just play in the browser, 
but... you can
Fork this repo (optional)
Launch the game

Unsolved Propblem:
The content on the right side of my image wont expand


    