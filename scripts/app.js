const pet = {
    name: '',
    hungerLevel: 1,
    sleepLevel: 1,
    boredLevel: 1,
    start(event) {
        console.log('Game has started')
        // the timer should be called here
    },
    feedsPet(event) {
        
    },




};

$("#feedMe").on('click', pet.feedsPet);


$("#lightsOff").on('click', function () {
    console.log('Lights Off');
})

$("#play").on('click', function () {
    console.log('Played with');
})

