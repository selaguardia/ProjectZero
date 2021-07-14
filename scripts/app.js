const pet = {
    name: '',
    hungerLevel: 0,
    sleepLevel: 10,
    boredLevel: 10,
    start(event) {
        console.log('Game has started');
    
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

const game = {
    
}

// Buttons

$("#feedMe").on('click', pet.feedsPet);

$("#lightsOff").on('click', pet.turnLightsOff);

$("#play").on('click', pet.playsPet);

// timer

// setInterval(progressTimer, 1000)

// use for getting name from input box 
// var value = $( this ).val();
