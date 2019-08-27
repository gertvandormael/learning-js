/*==================================================================================================
======================================== Magic Happens Here! =======================================
==================================================================================================*/



//Variables are declared.

let base_url = "https://pokeapi.co/api/v2/";

let poke_search = document.getElementById("pokesearch");
let search = document.getElementById("search");
let previous = document.getElementById("previous");
let next = document.getElementById("next");
let list = document.getElementById("list");
let info = document.getElementById("pkm-info")

let poke = {
    name: "",
    // para:"This is a pokemon" + poke.name
};

info.addEventListener("click", function(){
    list.innerHTML = "This is a " + poke.name + ". " + poke.name + "uses " + poke.moves
});

//EventListeners are added to HTML elements.
search.addEventListener("click", function () {
    LoadPokemon(poke_search.value);
});

poke_search.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        LoadPokemon(poke_search.value);
    }
})

previous.addEventListener("click", function () {
    if (poke.id === undefined) {
        poke.id = 2;
    }
    LoadPokemon(--poke.id);
});

next.addEventListener("click", function () {
    if (poke.id === undefined) {
        poke.id = 0;
    }
    LoadPokemon(++poke.id);
})



//Function that looks up the data for a pokemon when it's given the pokemon's name or id number.

function LoadPokemon(pokemon) {
    let request = new XMLHttpRequest();
    let dots = 1;

    request.onreadystatechange = function () {
        if (this.readyState === 4 && this.status == 200 && pokemon !== "") {
            SetVariables(JSON.parse(this.responseText));
        } else {
            SetVariables(dots++);
        }
    }

    request.open("GET", base_url + "pokemon/" + pokemon.toString().toLowerCase(), true);
    request.send();
}



//This function changes the variables with the most recent pokemon's information.

function SetVariables(data) {
    if (typeof data === "number") {
        console.log("Searching for data" + ".".repeat(data))
    } else {
        console.log("Data found!")
        poke.name = data.name;
        poke.id = data.id;
        poke.moves = data.moves.map(x => x.move.name);
        poke.abilities = data.abilities.map(x => x.ability.name);
        poke.image = data.sprites.front_default;
        poke.weight = data.weight;

        DoThingsWithTheDom();
    }
}

//This function loads all of the pokemons and stores them in a list in your HTML.
//Clicking one of the list items will then look up data for that specific pokemon!

function LoadPokemonList() {
    let request = new XMLHttpRequest();
    list.innerHTML = "";

    request.onreadystatechange = function () {
        if (this.readyState === 4 && this.status == 200) {
            let pokemon_list = JSON.parse(this.responseText).results.map(x => x.name);
            for (pokemon of pokemon_list) {
                let li = document.createElement("li");
                li.innerHTML = pokemon;
                li.addEventListener("click", function () {
                    LoadPokemon(this.innerHTML);
                })
                list.append(li);
            }
        }
    }

    request.open("GET", base_url + "pokemon?offset=0&limit=807", true);
    request.send();
}



//Function that you can call to see the current pokemon's information

function LogPokeData() {
    console.log("Name: " + poke.name +
        "\n" + "ID: " + poke.id +
        "\n" + "Moves:", poke.moves, "\n" + "Abilities:", poke.abilities, "\n" + "Image URL: " + poke.image +
        "\n" + "Weight: " + poke.weight);
}

/*==================================================================================================
======================================== Magic Ends Here! ==========================================
==================================================================================================*/

function DoThingsWithTheDom() {
    
    let pokeID = document.getElementById("pokeID");

    reset();
    document.getElementById("list").appendChild(document.createElement("li")).innerHTML = capitalizeFirstLetter(poke.name);
    document.getElementById("pokesearch").placeholder = capitalizeFirstLetter(poke.name);
    document.getElementById("list").appendChild(document.createElement("li")).innerHTML = "Moves: " + poke.moves[0] + " " + poke.moves[1] + " " + poke.moves[2] + " " + poke.moves[3] + " " + poke.moves[4];
    document.getElementById("list").appendChild(document.createElement("li")).innerHTML = "Abilities: " + poke.abilities[0] + " " + poke.abilities[1];
    document.getElementById("list").appendChild(document.createElement("li")).innerHTML = "Weight: " + poke.weight;
    document.getElementById("pokeimg").src = poke.image;
    pokeID.append(poke.id);


    function reset() {
        list.innerHTML = "";
        pokeID.innerHTML = "";
        document.getElementById("pokesearch").value = ""
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    console.log(poke)
    console.log(poke.moves)
}

let pkmList = document.getElementById("pkm-list");
pkmList.addEventListener("click", function () {
    list.innerHTML = LoadPokemonList()
});

let spoopy = document.getElementById("spoopy");
spoopy.addEventListener("click", function () {
    spoopyTune()
});

function spoopyTune() {
    var audio = new Audio("../img/spoopy.mp3");
    audio.play();
}

