$(document).ready(function() {

//user options/variables
var userChoice;
var userChosen = false;
var userChosenCharacter;
var userWins = 0;
var userLosses = 0;
var enemyChosen = false;
var enemyBattlerChoice;

//selectors
var tracerChoice = $(".tracer");
var soldierChoice = $(".soldier");
var doomfistChoice = $(".doomfist");
var winstonChoice = $(".winston");
var battle = $(".battleArea");
var battleBtn = $(".battleBtn");
var hiddenDiv = $(".hiddenDiv");

//arrays
var enemiesArray = [];
var defeatedArray = [];

//objects
var tracerObject = {
    health: 100,
    attackPower: 6,
    counterPower:10
};

var soldierObject = {
    health: 150,
    attackPower: 3,
    counterPower: 8
};

var doomfistObject = {
    health: 200,
    attackPower: 2,
    counterPower: 7
};

var winstonObject = {
    health: 250,
    attackPower: 2,
    counterPower: 5
};

//functions? todo: reset

//get character choice if tracer
tracerChoice.on("click", function(){

    //If the user has chosen a character do this instead
    if(userChosen === true){

        //If user has chosen a character, but there is no enemy, and this has the class enemyBattler send it to the battle arena
        if(enemyChosen=== false && tracerChoice.hasClass("enemyBattler")){
            enemyChosen = true;
            tracerChoice.appendTo(battle);
            enemyBattlerChoice = tracerObject;
        }else{
           
            
        }
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
        if(enemyChosen=== false && soldierChoice.hasClass("enemyBattler")){
            enemyChosen = true;
            soldierChoice.appendTo(battle);
            enemyBattlerChoice = soldierObject;
        }
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
        if(enemyChosen=== false && doomfistChoice.hasClass("enemyBattler")){
            enemyChosen = true;
            doomfistChoice.appendTo(battle);
            enemyBattlerChoice = doomfistObject;
        }
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
        if(enemyChosen=== false && winstonChoice.hasClass("enemyBattler")){
            enemyChosen = true;
            winstonChoice.appendTo(battle);
            enemyBattlerChoice = winstonObject;
        }
    }else{
        userChoice = winstonObject;
        userChosen = true;
        enemiesArray.push(tracerChoice, soldierChoice, doomfistChoice);
        for (let i =0; i < enemiesArray.length; i++){
            enemiesArray[i].addClass("enemyBattler");
            enemiesArray[i].appendTo($(".chooseEnemyArray"));
        }
        console.log(enemiesArray);
    }
});

battleBtn.on("click", function() {
    if(userChosen === true && enemyChosen === true){
        //When button clicked, user health minus enemy counter power
        userChoice.health -= enemyBattlerChoice.counterPower;
        console.log("User health: " + userChoice.health);

        //When button clicked, enemy health minus user attack power
        enemyBattlerChoice.health -= userChoice.attackPower;
        console.log("Enemy health: " + enemyBattlerChoice.health);

        //Double the user attack power
        userChoice.attackPower += userChoice.attackPower;
        console.log("User attackPower: " + userChoice.attackPower);

        //if user health = 0 you lose.
        if(userChoice.health <= 0) {
            userLosses++;
            console.log("You lose!");
            console.log(userLosses);
        }
        

        if(enemyBattlerChoice.health <= 0){
            if((tracerObject.health) <= 0){
                tracerChoice.hide();
            }else if ((soldierObject.health) <= 0){
                soldierChoice.hide();
            }else if ((doomfistObject.health) <=0){
                doomfistChoice.hide();
            }else if ((winstonObject.health) <=0){
                winstonChoice.hide();
            }
        enemyChosen = false;
        enemyBattlerChoice= "";
        }
    }
});

});