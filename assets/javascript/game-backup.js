$(document).ready(function() {

//user options/variables
var userChoice;
var userChosen = false;
var userChosenCharacter;
var userWins = 0;
var userLosses = 0;
var enemyChosen = false;

//selectors
var tracerChoice = $(".tracer");
var soldierChoice = $(".soldier");
var doomfistChoice = $(".doomfist");
var winstonChoice = $(".winston");
var enemyBattler = $(".enemyBattler");

//arrays
var enemiesArray = [];
var defeatedArray = [];

//objects
var tracerObject = {
    health: 150,
    attackPower: 6,
    counterPower:10
};

var soldierObject = {
    health: 200,
    attackPower: 3,
    counterPower: 8
};

var doomfistObject = {
    health: 250,
    attackPower: 2,
    counterPower: 7
};

var winstonObject = {
    health: 300,
    attackPower: 2,
    counterPower: 5
};

//functions? todo: reset

//get character choice if tracer
tracerChoice.on("click", function(){
    if(userChosen === true){
        console.log("A character was already chosen");
    }else{
        //This makes the userchoice the tracer object
        userChoice = tracerObject;
        console.log(userChoice);

        //This is setting it so someone cannot pick another character
        userChosen = true;
        console.log("You picked Tracer!");

        //Pushing things they didn't choose to an array to become an enemy
        enemiesArray.push(soldierChoice, doomfistChoice, winstonChoice);

        //Moving the enemies from the starting div to the enemy staging area
        for (let i =0; i < enemiesArray.length; i++){
            
            //Adding a class and moving the divs to the chooseEnemyArray area.
            enemiesArray[i].addClass("enemyBattler");
            console.log(enemiesArray + " look at me");
            enemiesArray[i].appendTo($(".chooseEnemyArray"));
        }
        console.log(enemiesArray);
    }
});

soldierChoice.on("click", function() {
    if(userChosen === true){
        console.log("A character was already chosen");
    }else{
        userChoice = soldierObject;
        userChosen = true;
        console.log("You picked soldier!");
        enemiesArray.push(tracerChoice, doomfistChoice, winstonChoice);
        for (let i =0; i < enemiesArray.length; i++){
            enemiesArray[i].addClass("enemyBattler");
            enemiesArray[i].appendTo($(".chooseEnemyArray"));
        }
        console.log(enemiesArray);
    }
});

doomfistChoice.on("click", function() {
    if(userChosen === true){
        console.log("A character was already chosen");
    }else{
        userChoice = doomfistObject;
        userChosen = true;
        console.log("You picked Doomfist!");
        enemiesArray.push(tracerChoice, soldierChoice, winstonChoice);
        for (let i =0; i < enemiesArray.length; i++){
            enemiesArray[i].addClass("enemyBattler");
            enemiesArray[i].appendTo($(".chooseEnemyArray"));
        }
        console.log(enemiesArray);
    }
});

winstonChoice.on("click", function() {
    if(userChosen === true){
        console.log("A character was already chosen");
    }else{
        userChoice = winstonObject;
        userChosen = true;
        console.log("You picked winston!");
        enemiesArray.push(tracerChoice, soldierChoice, doomfistChoice);
        for (let i =0; i < enemiesArray.length; i++){
            enemiesArray[i].addClass("enemyBattler");
            enemiesArray[i].appendTo($(".chooseEnemyArray"));
        }
        console.log(enemiesArray);
    }
});

$(".enemyBattler").on("click", function() {
    console.log("Newest onclick is working");
    if(enemyChosen === true){
        console.log("An enemy has already been selected, bruv");
    }else{
        enemyChosen = false;
        
    }
});

});