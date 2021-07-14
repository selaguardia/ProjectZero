
const pet = {
    name: '',
    hungerLevel: 1,
    sleepLevel: 1,
    boredLevel: 1,
    start(event) {
        console.log('Game has started')
        // the timer should be called here
    },
    feedsPet() {
        console.log('fed');
    },
    turnLightsOff() {
        console.log('lights');
    },
    playsPet() {
        console.log('played');
    },




};

// Buttons

$("#feedMe").on('click', pet.feedsPet);

$("#lightsOff").on('click', pet.turnLightsOff);

$("#play").on('click', pet.playsPet);
