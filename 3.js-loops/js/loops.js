let field = document.getElementById("field");

// Add event listener to buttons
let standard = document.getElementById("generate");
standard.addEventListener("click", generateField);

let random = document.getElementById("random");
random.addEventListener("click", makeRandom)

function generateField() {
    reset()
    for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= 10; j++) {
            if (i % 2 == j % 2) {
                let cell = document.createElement("div");
                cell.setAttribute("class", "cell");
                field.append(cell);
                cell.innerHTML = j
            } else {
                let cell = document.createElement("div");
                cell.setAttribute("class", "cell bgblack");
                field.append(cell);
                cell.innerHTML = j
            }
            // cell.innerHTML = i
        }
    }
}

function makeRandom() {
    reset()
    for (let i = 1; i <= 100; i++) {
        let cell = document.createElement("div");
        cell.setAttribute("class", "cell");
        field.append(cell);
        cell.innerHTML = i
    }
}

function getNewRandomColor() {
    var colors = ['red', 'green', 'blue', 'yellow', 'purple'];
    var rand = colors[Math.floor(Math.random() * colors.length)];
    document.getElementsByClassName("cell").style.backgroundColor = rand;
    randcolors()
}


function randColors() {
    var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    document.div.style.backgroundColor = rndCol;        }

function reset() {
    field.innerHTML = "";
}
