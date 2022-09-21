//- Ask a number to the player (between 1 and 100)
//- If the player's number is over the stored value, log "It is less"
//- If the player's number is under the stored value, log "It is more"
//- If the player's number equals the stored value, log "<player> wins" (where <player> is replaced by the player's name)
//- The game stops when the player wins

//- Store a random number between 1 and 100 : 
//const random = Math.floor(Math.random() * 100) + 1;
const random = Math.floor(Math.random() * 100) + 1;


function play() {
    //- Get the player name from the input box
    const userName = document.querySelector("#name").value;
    //- Get the number chosen by the player from the input box
    let numberChosen;// = parseInt(document.querySelector("#valueField").value);
    // create a variable to store the field where we display messages and results
    let resultFieldHTML = document.querySelector("#resultField");
    // create a status to keep on playing and entering in the while loop
    let gameOnGoing = true;

    while (gameOnGoing) {

        numberChosen = parseInt(document.querySelector("#valueField").value);
        console.log("random : " + random);
        console.log("numberChosen : " + numberChosen);
        if (numberChosen > random) {
            resultFieldHTML.innerHTML = `It is less`;
            gameOnGoing = false;
        }
        if (numberChosen < random) {
            gameOnGoing = false;
            resultFieldHTML.innerHTML = `It is more`;
        }
        if (numberChosen === random) {
            gameOnGoing = false;
            resultFieldHTML.innerHTML = `BIEN JOUE ${userName}, c'est le ${random} !!`;
        }
    }


}

const btn = document.querySelector("#playBtn");
btn.addEventListener("click", play);
