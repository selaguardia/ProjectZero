

const pet = {
    name: '',
    hungerLevel: 10,
    sleepLevel: 10,
    boredLevel: 10,
    age: 0,
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
    updateButton() {
        document.getElementById("nameBtn").innerHTML = "Rename Pet";
        $("#inputName").toggle();
    },
    updateAge() {
        $("#petAge").text(`${pet.age}`);
    }
};

const game = {
    timer: null,
    ageClock: null,
    time: 5,
    beginTimer() {
        game.timer = setInterval(game.reduceTime, 2000);
        console.log('clicked');
        game.petDies();
        game.ageClock = setInterval(game.increaseAge, 2000);
        console.log(pet.age);
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
            $("#petPhoto").attr("src", "/images/cemetary.jpg");
            console.log($("#petPhoto").attr())
            clearInterval(game.timer);
            clearInterval(game.ageClock);
            console.log('Sorry you pet has died!');
        }
    },
    welcomeScreen() {
        $("#welcomeBanner").text(`Your pet ${pet.name} is doing . . `) ;
        
    }, 
    hungerProgress() {
         $("#hungerBar").val(pet.hungerLevel);
    },
    sleepProgress() {
        $("#sleepBar").val(pet.sleepLevel);
    },
    boredProgress() {
        $("#boredBar").val(pet.boredLevel);
    },
    ageTimer() {
         // change sec
        game.petDies();
        console.log('clicked');
    },
    increaseAge() {
        pet.age += 1;
        pet.updateAge();
        game.petMorph();

    },
    petMorph() {
        if (pet.age <= 0) {
            $("#petPhoto").attr("src","/images/cemetary.jpg");
        } else if(pet.age > 1 && pet.age <=4) {
            $("#petPhoto").attr("src", "/images/puppy.jpg");
        } else if (pet.age >4 && pet.age <= 12) {
            $("#petPhoto").attr("src", "/images/adult.jpg");
        } else if (pet.age >= 13) {
            $("#petPhoto").attr("src", "/images/senior.jpg");
        }
    },
};

game.welcomeScreen();

$("#nameBtn").on('click', pet.namePet);

$('#startButton').on('click', game.beginTimer);
$('#startButton').on('click', game.ageTimer);



// Buttons
$("#feedMe").on('click', pet.feedsPet);

$("#lightsOff").on('click', pet.turnLightsOff);

$("#play").on('click', pet.playWithPet);


