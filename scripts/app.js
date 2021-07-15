

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
    namePet() {
        pet.name = $("#inputName").val();
        game.welcomeScreen();
        pet.updateButton();
        console.log(pet.name);

    },
    renamePet() {
        pet.name = $("#inputName").val();
        game.welcomeScreen();
        console.log(pet.name);
       
    },
    reduceHunger() {
        pet.hungerLevel--;
    },
    reduceSleep() {
        pet.sleepLevel--;
    },
    reduceBoredom() {
        pet.boredLevel--;
    },
    updateButton () {
        document.getElementById("nameBtn").innerHTML = "Rename Pet";
        $("#inputName").toggle();
    }
};

const game = {
    timer: null,
    time: 5,
    beginTimer() {
        game.timer = setInterval(game.reduceTime, 2000);
        console.log('clicked');
        game.petDies();
    },
    // reduceTime : () => {
    reduceTime () {
        game.time--;

        pet.reduceHunger();
        game.hungerProgress();

        pet.reduceSleep();
        game.sleepProgress();

        pet.reduceBoredom();
        game.boredProgress();

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
        
    }, 
    hungerProgress() {
         $("#hungerBar").val(pet.hungerLevel);
    },
    sleepProgress() {
        $("#sleepBar").val(pet.sleepLevel);
    },
    boredProgress() {
        $("#boredBar").val(pet.boredLevel);
    }
};

game.welcomeScreen();

$("#nameBtn").on('click', pet.namePet);

$('#startButton').on('click', game.beginTimer);



// Buttons

$("#feedMe").on('click', pet.feedsPet);

$("#lightsOff").on('click', pet.turnLightsOff);

$("#play").on('click', pet.playWithPet);

// use for getting name from input box 
// var value = $( this ).val();

//


