
const pet = {
    name: '',
    hungerLevel: 10,
    sleepLevel: 10,
    boredLevel: 10,
    start(event) {
        console.log('Game has started')
        // the timer should be called here
    },
    feedsPet() {
        pet.hungerLevel = 10;
    },
    turnLightsOff() {
        pet.sleepLevel = 10;
    },
    playsPet() {
        pet.boredLevel = 10;
    }
};

// Buttons

$("#feedMe").on('click', pet.feedsPet);

$("#lightsOff").on('click', pet.turnLightsOff);

$("#play").on('click', pet.playsPet);

// timer

// setInterval(progressTimer, 1000)
