// In this file, we'll be using variables, conditionals,
// and loops to model a soccer match.

// In this file we 'll be using variables , conditonals, and loops to model a soccer match between the Emerald eagles and Draconian Dragons.

// Create variables to resprent the two teams offensive and defensive ability based on stats from previous games.

let eagleOff = 9;
let dragonOff = 5;
let eagleDef = 6;
let dragonDef = 3;

// Before the game fans decide to check their stats. Using an if-else statement, console.log whose offense is better.
if (eagleOff > dragonOff){
    console.log("The Emerald Eagles have a better offense than the Draconian Dragons.");
} else if (dragonOff > eagleOff){
    console.log("The Draconian Dragons have a better offense than the Emerald Eagles");


// What if we have a tie? Our code would actually say the Emerald Eagles have a better offense, which would be incorrect. Add an else if to resolve this.
if (dragonOff > eagleOff) {
    console.log("The Draconian Dragons have a better offense than the Emerald Eagles.");
} else if (eagleOff > dragonOff) {
    console.log("The Emerald Eagles have a better offense than the Draconian Dragons.");
} else {
    console.log("The two teams have the same offense ability.");
}
    // The games begins ! Create two variables to represent the starting score of the teams.
    
    let eagleScore = 0;
    let dragonScore = 0;

    // The Dragons start with the ball — use an if/else to determine if the Eagles’ defense is enough to prevent them from scoring. If it is not enough, console.log “The Dragons have scored.” and update the score. Otherwise, console.log “The game continues".

    if (dragonOff > eagleDef){
        console.log("The Dragons have scored.");
        dragonScore = dragonScore + 1;
    }else {
        console.log ("The game continues.")
     }

     // Now the Eagles have the ball and are trying to score! Use an if/else to determine if the Dragons’ defense is enough to prevent them from scoring. If they do, console.log “The Eagles have scored.” and update the score. Otherwise, console.log “The game continues”.

     if (eagleOff > dragonDef){
        console.log("The Eagles have scored.");
        eagleScore = eagleScore + 1;
    }else {
        console.log ("The game continues.")
     }
    //  After playing a long time, the players are tired. The coach for the Eagles team decides to swap out one of the offensive players for their best offensive player. This player will raise the offense ability of the team by 5. However, the offense ability cannot canont exceed 10. Using an if else statement, increase the Eagles’ offense ability to the correct value.
    if(eagleOff <=5){
        eagleOff +=5;
    }else{
        eagleOff = 10;
    }
    console.log(eagleOff);

// The coach for the Dragons team is thinking about taking a timeout. She decides to flip a coin, and if the coin lands on heads, she will take a timeout. If it lands on tails, she won’t. Create a variable called coinLandsHeads and set it equal to false. Then, using an if-else statement and the equality operator, handle the value of the flipped coin (handle for both true and false).

// let coinLandsHead = false;
// if(coinLandsHead === true){
//     console.log("The Dragons coach calls timeout")
// }else{
//     console.log("Let's keep playing.");
// }
// Demonstrate how you can use != to accomplish the same thing.
let coinLandsHead = false;
if(!coinLandsHead === true){
    console.log("The Dragons coach calls timeout");
}else{
    console.log("Let's keep playing.");
}
// Let’s see how this game will play out if it continues. Create a for loop to model the Eagles scoring 5 times. Console.log the scores of the teams after each goal.
for(let i = 1; i <= 5; i++){
    console.log(i);
    // looping five time from i = 1 to i = 5
    if (eagleOff > dragonDef){
        console.log("The Eagles have scored.");
        eagleScore = eagleScore + 1;
        console.log(`And the score is: Eagles ${eagleScore} Dragons ${dragonScore}`)
    }else {
        console.log ("The game continues.")

}

}
// Demonstrate a while loop that will have the Dragons keep making goals until their score is 5. You will need to comment out the above for loops for these to run properly.
 
//     while(dragonScore < 5){
//     if (dragonOff>eaglesDef)
//     dragonScore ++;
// }
// console.log(dragonScore)
// Add an if statement that will only let the Dragons make a goal if their offense ability is greater than the Eagles’ defense ability.
if (dragonOff > eagleDef)
    while(dragonScore < 5){ 
    dragonScore ++;
    console.log(dragonScore)
}
}
