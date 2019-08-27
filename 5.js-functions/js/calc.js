let solution = document.getElementById("calc-preview");
// Creating a node of all buttons in #calc-numbers & "operations"
let numbers = document.querySelectorAll("#calc-numbers button");
let operations = document.querySelectorAll("#operations button")

// Making a loop to add an event listener to every array item
for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", value);
}

console.log(numbers)

for (let i = 0; i < operations.length - 3; i++) {
    operations[i].addEventListener("click", value)
}

operations[4].addEventListener("click", percentage)

operations[5].addEventListener("click", outcome);

operations[6].addEventListener("click", reset);

function value() {
    solution.innerHTML += this.innerHTML;
    let inputArray = [];
    inputArray.push(solution.innerHTML)
}

function percentage() {
    solution.innerHTML += " / 100 *";
}

function outcome() {
    countMe = solution.innerHTML
    solution.innerHTML = eval(countMe);
}

function reset() {
    solution.innerHTML = ""
}

// HOVER EFFECT
// Create a node of all buttons in an array
let hoverButtons = document.querySelectorAll("button")
// Event listener adding class on mouseover and removing on mouseout
for (let i = 0; i < hoverButtons.length; i++)
    hoverButtons[i].addEventListener("mouseover", function () {
        hoverButtons[i].setAttribute("class", "hovering")
    });

for (let i = 0; i < hoverButtons.length; i++)
    hoverButtons[i].addEventListener("mouseout", function () {
        hoverButtons[i].setAttribute("class", "")
    });

    
// KEY PRESSES
document.addEventListener("keypress", logkey);

function logkey(e) {
    solution.innerHTML += "1"
}