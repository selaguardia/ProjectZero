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
            pet.hungerLevel--;
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
    },
    renamePet() {
       // pet.name =  userinput would go here // fix this
    },
    reduceHunger() {
        pet.hungerLevel--;
    },
    reduceSleep() {
        pet.sleepLevel--;
    },
    reduceBoredom() {
        pet.boredLevel--;
    }
};


const game = {
    timer: null,
    time: 5,
    beginTimer() {
        game.timer = setInterval(game.reduceTime, 2000);
        console.log('clicked');
       // this.petDies();
    },
    // reduceTime : () => {
    reduceTime () {
        game.time--;
        pet.reduceHunger();
        pet.reduceSleep();
        pet.reduceBoredom();
        game.petDies();
        
    },
    petDies() {
        if (pet.hungerLevel <= 0 || pet.sleepLevel <= 0 || pet.boredLevel <= 0) {
            clearInterval(game.timer);
            console.log('Sorry you pet has died!');
        }
    }  
};

$('#startButton').on('click', game.beginTimer);

$("#renameButton").on('click', pet.renamePet);

// Buttons

$("#feedMe").on('click', pet.feedsPet);

$("#lightsOff").on('click', pet.turnLightsOff);

$("#play").on('click', pet.playWithPet);

// use for getting name from input box 
// var value = $( this ).val();
