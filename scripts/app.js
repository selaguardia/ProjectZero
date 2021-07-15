

const pet = {
    name: '',
    hungerLevel: 10,
    sleepLevel: 10,
    boredLevel: 10,
    start(event) {

    
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
    },
    startUp() {
        pet.name = window.prompt("Hello, what would you like to name your pet?");
        $("#renamePet").on('click', pet.renamePet);
    },
    renamePet() {
        pet.name = window.prompt("Hello, what would you like to name your pet?");
        $("#renamePet").on('click', pet.renamePet);
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
    },
    welcomeScreen() {
        $("#welcomeBanner").text(`Welcome, your pet ${pet.name} is doing . . `) ;
        
    }  
};

pet.startUp();
game.welcomeScreen();

$('#startButton').on('click', game.beginTimer);

$("#renameButton").on('click', pet.renamePet);

// Buttons

$("#feedMe").on('click', pet.feedsPet);

$("#lightsOff").on('click', pet.turnLightsOff);

$("#play").on('click', pet.playWithPet);

// use for getting name from input box 
// var value = $( this ).val();

//


