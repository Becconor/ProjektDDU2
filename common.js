// skapa hemknapp
function homeNavigation() {
    let navHome = document.getElementById("home");

    let homeLink = document.createElement("a");
    homeLink.textContent = "Home";
    homeLink.href = "../index.html";
    navHome.appendChild(homeLink);
}
homeNavigation();


// skapa shuffle knapp till griden av siffer boxar
let createElement = document.getElementById("creator");

let creatorText = document.createElement("p");
creatorText.textContent = "How many numbers in the grid?";
createElement.appendChild(creatorText);

let creatorInput = document.createElement("input");
creatorInput.value = 95;
createElement.appendChild(creatorInput);

let creatorButton = document.createElement("button");
creatorButton.textContent = "Create";
createElement.appendChild(creatorButton);