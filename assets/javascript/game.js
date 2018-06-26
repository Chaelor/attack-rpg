$(document).ready(function() {

//user options/variables
var userChoice;
var userChosen = false;
var userChosenCharacter;
var userWins = 0;
var userLosses = 0;

//selectors
var tracerChoice = $(".tracer");
var soldierChoice = $(".soldier");
var doomfistChoice = $(".doomfist");
var winstonChoice = $(".winston");

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

//functions?
//get character choice
tracerChoice.on("click", function(){
    if(userChosen === true){
        console.log("A character was already chosen");
    }else{
        userChosen = true;
        enemiesArray.push(soldierChoice, doomfistChoice, winstonChoice);
        console.log(enemiesArray);
    }
});

soldierChoice.on("click", function() {
    if(userChosen === true){
        console.log("A character was already chosen");
    }else{
        userChosen = true;
        console.log("You picked tracer!");
    }
});

doomfistChoice.on("click", function() {
    if(userChosen === true){
        console.log("A character was already chosen");
    }else{
        userChosen = true;
        console.log("You picked doomfist!");
    }
});

winstonChoice.on("click", function() {
    if(userChosen === true){
        console.log("A character was already chosen");
    }else{
        userChosen = true;
        console.log("You picked winston!");
    }
});

});