const pet = {
    name: '',
    hungerLevel: 5,
    sleepLevel: 5,
    boredLevel: 5,
    start(event) {
        // gamew.reset
    
    },
    feedsPet() {
        if (pet.hungerLevel < 10) {
            pet.hungerLevel++;
        }
    },
    turnLightsOff() {
        if (pet.sleepLevel < 10) {
            pet.sleepLevel++;
        }
        
    },
    playWithPet() {
        if (pet.boredLevel < 10) {
            pet.boredLevel++;
        }
    }
};


const game = {
    timer: null,
    beginTimer() {
        this.timer = setInterval(this.reduceTime, 2000);
    },
    reduceTime() {
        
    },
    petDies() {
        console.log('Sorry you pet has died!')
    }
    
};

// Buttons

$("#feedMe").on('click', pet.feedsPet);

$("#lightsOff").on('click', pet.turnLightsOff);

$("#play").on('click', pet.playWithPet);

// timer

// setInterval(progressTimer, 1000)

// use for getting name from input box 
// var value = $( this ).val();
