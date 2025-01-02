// Navigation till hem
let navHome = document.getElementById("home");

let homeLink = document.createElement("a");
homeLink.textContent = "Home";
homeLink.href = "../index.html";
navHome.appendChild(homeLink);



// skapa header som innehåller först en gemensam för alla sidor boxCreator
let createElement = document.getElementById("creator");

let creatorText = document.createElement("p");
creatorText.textContent = "How many numbers in the grid?";
createElement.appendChild(creatorText)

let creatorInput = document.createElement("input");
creatorInput.placeholder = 95;
createElement.appendChild(creatorInput);

let creatorButton = document.createElement("button");
creatorButton.textContent = "Create";
createElement.appendChild(creatorButton)