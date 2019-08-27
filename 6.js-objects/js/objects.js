// Exercise 1
let aboutMe = {
    name: "Gert",
    age: 28,
    gender: "male",
    favoriteFood: "free food",
    favoriteMovies: "action movies",
    single: "yes",
}

console.log(aboutMe); //node of all properties
console.log(aboutMe.gender) //male
console.log(aboutMe.favoriteMovies) //action movies

// Exercise 2 & 3
let buttons = document.querySelectorAll("button");
let img = document.getElementById("img");
let list = document.getElementById("list")

function familyMember(name, age, gender, favoriteFood, favoriteMovies, single, url, buttons) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.favoriteFood = favoriteFood;
    this.favoriteMovies = favoriteMovies;
    this.single = single;
    this.url = url; //store in object to use with event listener
    this.buttons = buttons 
    buttons.addEventListener("click", function () {
        img.src = url;
        reset()
        list.appendChild(document.createElement("li")).innerHTML = "Name: " + name;
        list.appendChild(document.createElement("li")).innerHTML = "Age: " + age;
        list.appendChild(document.createElement("li")).innerHTML = "Gender: " + gender;
        list.appendChild(document.createElement("li")).innerHTML = "Favorite food: " + favoriteFood;
        list.appendChild(document.createElement("li")).innerHTML = "Favorite movies: " + favoriteMovies;
        list.appendChild(document.createElement("li")).innerHTML = "Single: " + single;
    });
}

function reset() {
    list.innerHTML = ""
}

let me = new familyMember("Me", 28, "male", "food", "action", "yes", "./img/me.jpeg", buttons[0]);
let father = new familyMember("Harold", 65, "male", "food", "Harold is life", "no", "./img/father.jpeg", buttons[1]);
let mother = new familyMember("Karen", 55, "female", "food", "Can I speak with the manager?", "no", "./img/mother.jpeg", buttons[2]);
let brother = new familyMember("Imaginary", 18, "attack helicopter", "air", "Apocalypse now", "yes", "./img/brother.jpeg", buttons[3]);
