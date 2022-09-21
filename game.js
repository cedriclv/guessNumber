//- Ask a number to the player (between 1 and 100)
//- If the player's number is over the stored value, log "It is less"
//- If the player's number is under the stored value, log "It is more"
//- If the player's number equals the stored value, log "<player> wins" (where <player> is replaced by the player's name)
//- The game stops when the player wins

//- Store a random number between 1 and 100 : 
//const random = Math.floor(Math.random() * 100) + 1;
const random = Math.floor(Math.random() * 100) + 1;


// targeting of the input box to change their color after a first input has been done
const inputBoxUser = document.querySelector("#name");
const inputBoxUserValue = inputBoxUser.value;
const inputBoxNumber = document.querySelector("#valueField");
const inputBoxNumberValue = inputBoxNumber.value;
//event listener to trigger the function changeInitialStat that change the font color
inputBoxUser.addEventListener("input", function () {
    changeInitialStat(inputBoxUser, inputBoxUserValue)
});
inputBoxNumber.addEventListener("input", function () {
    changeInitialStat(inputBoxNumber, inputBoxNumberValue)
});

function changeInitialStat(elementToBeChecked, initialValue) {
    if (elementToBeChecked.value !== initialValue) {
        elementToBeChecked.style.color = "var(--primary-color)";
    }
}

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
            resultFieldHTML.innerHTML = `YOU ARE TOO HIGH !`;
            gameOnGoing = false;
        }
        if (numberChosen < random) {
            gameOnGoing = false;
            resultFieldHTML.innerHTML = `YOU ARE TOO LOW !`;
        }
        if (numberChosen === random) {
            gameOnGoing = false;
            resultFieldHTML.innerHTML = `GOOD GUESS ${userName}, THIS IS INDEED THE ${random} !!`;
        }
    }
}
//event listener on the "PLAY" button
const btn = document.querySelector("#playBtn");
btn.addEventListener("click", play);
const inputBoxNumberChosen = document.querySelector("#valueField");
//event listener to trigger the click button when we press enter on the  input box of the number chosen
inputBoxNumberChosen.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        btn.click();
    }
});
