// Starts functiong playGame on click of button play
let play = document.getElementById("play");
play.addEventListener("click", playGame);

// Let's you decide how many players with function changeGame on select
let players = document.getElementById("players");
players.addEventListener("change", changeGame);

// Makes the selected option in html into a let variable
let p1choice = document.getElementById("p1choice");
let p2choice = document.getElementById("p2choice");

// Makes an array with the game options
let choices = ["rock", "paper", "scissors"];


// 
for (choice of choices) {
    let element = document.createElement("option");
    element.value = choice;
    element.innerHTML = choice;

    p1choice.append(element);
}

for (choice of choices) {
    let element = document.createElement("option");
    element.value = choice;
    element.innerHTML = choice;

    p2choice.append(element);
}

function playGame(event) {
    let p1value = p1choice.value;
    let p2value;

    if (p2choice.disabled === false) {
        p2value = p2choice.value;
    } else {
        p2value = choices[Math.floor(Math.random() * choices.length)];
    }

    if (p1value === p2value) {
        result = "tie"
    }

    if (p1value === "rock" && p2value === "scissors") {
        result = "player 1 wins"
    }

    if (p1value === "rock" && p2value === "paper") {
        result = "player 2 wins"
    }

    if (p1value === "paper" && p2value === "scissors") {
        result = "player 2 wins"
    }

    if (p1value === "paper" && p2value === "rock") {
        result = "player 1 wins"
    };

    if (p1value === "scissors" && p2value === "rock") {
        result = "player 2 wins"
    };

    if (p1value === "scissors" && p2value === "paper") {
        result = "player 1 wins"
    };

    document.getElementById("result").innerHTML = result
}


function changeGame(event) {
    if (players.value === "1") {
        p2choice.disabled = true;
    } else {
        p2choice.disabled = false;
    }
}