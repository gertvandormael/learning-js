let api = "https://thatsthespir.it/api";
let xhr = new XMLHttpRequest;
let content = document.getElementById("content");
let button = document.getElementById("button");

button.addEventListener("click", loadQuote);

loadQuote();

function loadQuote() {
    xhr.open("GET", api, true);

    xhr.onload = function () {
        if (this.status == 200) {
            let quoteObject = (JSON.parse(this.responseText));
            writeQuote(quoteObject);
        } else if (this.status = 404) {
            div.innerHTML = "404 Not found"
        }
    }

    xhr.send();
}

function writeQuote(object) {
    content.innerHTML = "";

    let details = document.createElement("div");
    let quote = document.createElement("h2");
    let author = document.createElement("h3");
    let picture = document.createElement("div")
    let img = document.createElement("img");
    let id = document.createElement("a")

    quote.innerHTML = `"${object.quote}"`;
    author.innerHTML = `${object.author}`;

    if (object.photo != "") {
        img.src = object.photo;
        img.alt = object.slug;
    }

    id.innerHTML = `source id ${object.id}`;
    id.href = `${object.permalink}`

    content.append(details, picture);
    details.append(quote, author, id);
    picture.append(img)

    details.setAttribute("class", "details");
    picture.setAttribute("class", "picture");
}