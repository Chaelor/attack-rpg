$(document).ready(function() {

//user options/variables
var userChoice = "";
var userChosen = false;
var userWins = 0;
var userLosses = 0;
var enemyChosen = false;
var enemyBattlerChoice = "";
var defeated = 0;

//selectors
var tracerChoice = $(".tracer");
var soldierChoice = $(".soldier");
var doomfistChoice = $(".doomfist");
var winstonChoice = $(".winston");
var battle = $(".battleArea");
var battleBtn = $(".battleBtn");
var characterChoices = $(".characterChoices");

//arrays
var enemiesArray = [];

//objects
var tracerObject = {
    health: 100,
    attackPower: Math.round(Math.random()*20 + 1),
    counterPower: Math.round(Math.random()*15)
};

var soldierObject = {
    health: 150,
    attackPower: Math.round(Math.random()*20 + 1),
    counterPower: Math.round(Math.random()*15)
};

var doomfistObject = {
    health: 200,
    attackPower: Math.round(Math.random()*20 + 1),
    counterPower: Math.round(Math.random()*15)
};

var winstonObject = {
    health: 250,
    attackPower: Math.round(Math.random()*20 + 1),
    counterPower: Math.round(Math.random()*15)
};

//functions? todo: reset
function reset() {

    //Resetting the character and enemey choices
    enemyChosen = false;
    userChosen = false;
    defeated = 0;
    enemiesArray = [];
    
    userChoice = "";
    
    //Resetting the objects
    tracerObject = {
        health: 100,
        attackPower: Math.round(Math.random()*20)
    };

    soldierObject = {
        health: 150,
        attackPower: Math.round(Math.random()*20)
    };

    doomfistObject = {
        health: 200,
        attackPower: Math.round(Math.random()*20)
    };

    winstonObject = {
        health: 250,
        attackPower: Math.round(Math.random()*20)
    };



    tracerChoice.appendTo(characterChoices);
    tracerChoice.show();
    soldierChoice.appendTo(characterChoices);
    soldierChoice.show();
    doomfistChoice.appendTo(characterChoices);
    doomfistChoice.show();
    winstonChoice.appendTo(characterChoices);
    winstonChoice.show();

}
//Show game stats
function showGameStats() {
    $(".gameStatsContainer").show();
    $(".gameStatsButton").show();
}

//Add health under every user
tracerChoice.append("<div class=center> Health: " + tracerObject.health + "</div>")
soldierChoice.append("<div class=center> Health: " + soldierObject.health + "</div>")
doomfistChoice.append("<div class=center> Health: " + doomfistObject.health + "</div>")
winstonChoice.append("<div class=center> Health: " + winstonObject.health + "</div>")

//get character choice if tracer
tracerChoice.on("click", function(){

    //If the user has chosen a character do this instead
    if(userChosen === true){

        //If user has chosen a character, but there is no enemy, and this has the class enemyBattler send it to the battle arena
        if(enemyChosen=== false && tracerChoice.hasClass("enemyBattler")){
            
            //Make sure the user can't choose another enemy
            enemyChosen = true;

            //Send tracer image to the battle div
            tracerChoice.appendTo(battle);

            //Show the div where the battling will occur
            $(".doBattle").show();

            //Show the gamestatscontainer
            showGameStats();

            //Set the enemy equal to the tracerObject
            enemyBattlerChoice = tracerObject;
        }else{
           
            
        }
    }else{
        //This makes the userchoice the tracer object
        console.log(userChoice);

        //This is setting it so someone cannot pick another character
        userChosen = true;
        console.log("You picked Tracer!");

        //Pushing things they didn't choose to an array to become an enemy
        enemiesArray.push(soldierChoice, doomfistChoice, winstonChoice);

        //Show the enemy choice div
        $(".chooseEnemy").show();

        //Moving the enemies from the starting div to the enemy staging area
        for (let i =0; i < enemiesArray.length; i++){
            
            //Adding a class and moving the divs to the chooseEnemyArray area.
            enemiesArray[i].addClass("enemyBattler");
            console.log(enemiesArray + " look at me");
            enemiesArray[i].appendTo($(".chooseEnemy"));
        }
        userChoice = tracerObject;
        console.log(enemiesArray);
    }
});

soldierChoice.on("click", function() {
    if(userChosen === true){
        if(enemyChosen=== false && soldierChoice.hasClass("enemyBattler")){
            enemyChosen = true;
            soldierChoice.appendTo(battle);
            $(".doBattle").show();
            showGameStats();
            enemyBattlerChoice = soldierObject;
        }
    }else{
        userChosen = true;
        console.log("You picked soldier!");
        enemiesArray.push(tracerChoice, doomfistChoice, winstonChoice);
        $(".chooseEnemy").show();
        for (let i =0; i < enemiesArray.length; i++){
            enemiesArray[i].addClass("enemyBattler");
            enemiesArray[i].appendTo($(".chooseEnemy"));
        }
        userChoice = soldierObject;
        console.log(enemiesArray);
    }
});

doomfistChoice.on("click", function() {
    if(userChosen === true){
        if(enemyChosen=== false && doomfistChoice.hasClass("enemyBattler")){
            enemyChosen = true;
            doomfistChoice.appendTo(battle);
            $(".doBattle").show();
            showGameStats();
            enemyBattlerChoice = doomfistObject;
        }
    }else{
        userChosen = true;
        console.log("You picked Doomfist!");
        enemiesArray.push(tracerChoice, soldierChoice, winstonChoice);
        $(".chooseEnemy").show();
        for (let i =0; i < enemiesArray.length; i++){
            enemiesArray[i].addClass("enemyBattler");
            enemiesArray[i].appendTo($(".chooseEnemy"));
        }
        userChoice = doomfistObject;
        console.log(enemiesArray);
    }
});

winstonChoice.on("click", function() {
    if(userChosen === true){
        if(enemyChosen=== false && winstonChoice.hasClass("enemyBattler")){
            enemyChosen = true;
            winstonChoice.appendTo(battle);
            $(".doBattle").show();
            showGameStats();
            enemyBattlerChoice = winstonObject;
        }
    }else{
        userChosen = true;
        enemiesArray.push(tracerChoice, soldierChoice, doomfistChoice);
        $(".chooseEnemy").show();
        for (let i =0; i < enemiesArray.length; i++){
            enemiesArray[i].addClass("enemyBattler");
            enemiesArray[i].appendTo($(".chooseEnemy"));
        }
        console.log(enemiesArray);
        userChoice = winstonObject;
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

        if(enemyBattlerChoice.health <= 0){
            enemyBattlerChoice.health = 0;
        }

        //Print the wins, user and computer health to the div
        $(".gameStats").html("<div class='center margin'>Player health: " + userChoice.health + "</div><div class='center margin'>Enemy Health: " + enemyBattlerChoice.health + "</div><div class='center margin modifyWins'>Wins: " + userWins + "</div><div class='center margin modifyLosses'>Losses: " + userLosses + "</div>");

        //If the health of user is under 0, set it to 0 and lose the game
        if(userChoice.health <= 0) {
            userChoice.health =0;
            userLosses++;
            $(".modifyLosses").text("Losses: " + userLosses);
            reset();
        }

        //Double the user attack power
        userChoice.attackPower += Math.round(Math.random()*20);
        console.log("User attackPower: " + userChoice.attackPower);
        
        //If the current enemy gets below one health
        if(enemyBattlerChoice.health <= 0){

            //Tracer health = 0
            if((tracerObject.health) <= 0){

                //If tracer is defeated, push her to an array
                defeated++;

                //Hide her, hide the button, hide the do battle
                tracerChoice.hide();
                $(".gameStatsButton").hide();
                $(".doBattle").hide();
                tracerObject.health = 100;
            }

            //Soldier health = 0
            if ((soldierObject.health) <= 0){
                defeated++;
                soldierChoice.hide();
                $(".gameStatsButton").hide();
                $(".doBattle").hide();
                soldierObject.health = 150;
            }

            //Doomfist health = 0
            if ((doomfistObject.health) <=0){
                defeated++;
                doomfistChoice.hide();
                $(".gameStatsButton").hide();
                $(".doBattle").hide();
                doomfistObject.health = 200;
            }

            //Winston health = 0
            if ((winstonObject.health) <=0){
                defeated++;
                winstonChoice.hide();
                $(".gameStatsButton").hide();
                $(".doBattle").hide();
                winstonObject.health = 250;
            }

            console.log("Defeated = " + defeated);
            //If the defeated var has more than 3 indexes, user wins
            if(defeated >= 3){
                userWins++;
                $(".modifyWins").text("Wins: " + userWins);
                $(".chooseEnemy").hide();
                $(".gameStatsButton").hide();
                $(".doBattle").hide();
                userChoice = "";
                reset();
            }


        enemyChosen = false;
        enemyBattlerChoice= "";
        }
    }
});

});