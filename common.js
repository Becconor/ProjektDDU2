// skapa vart länken till min hemsida och github ska ligga
let footerDom = document.getElementById("links");

let webLink = document.createElement("a");
webLink.textContent = "Webside";
webLink.href = "../index.html";
footerDom.appendChild(webLink);

let githubLink = document.createElement("a");
githubLink.textContent = "GitHub";
githubLink.href = "https://github.com/Becconor/ProjektDDU2.git";
footerDom.appendChild(githubLink);









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