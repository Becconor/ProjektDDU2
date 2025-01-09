function homeNavigation() {
    let navHome = document.getElementById("home");

    let homeLink = document.createElement("a");
    homeLink.textContent = "Home";
    homeLink.href = "../index.html";
    navHome.appendChild(homeLink);
}
homeNavigation();


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


function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};


function createNumberBoxes(value) {
    let numberBoxes = document.getElementById("numbers");
    numberBoxes.innerHTML = "";

    for (let i = 0; i < value; i++) {
        let numberBoxes = document.getElementById("numbers");
        let boxDiv = document.createElement("div");
        boxDiv.classList.add("boxes");
        numberBoxes.appendChild(boxDiv);
        boxDiv.textContent = randomInt(1, 100);
    }


    let page = document.body.getAttribute("data-page");

    if (page === "remove") {
        remove();
    } else if (page === "sum") {
        sum();
    } else if (page === "repetitions") {
        repetitions();
    } else if (page === "clear") {
        clear();
    } else if (page === "findSame") {
        findSame();
    } else if (page === "addUpTo") {
        addUpTo();
    }
};


creatorButton.addEventListener("click", function (event) {
    createNumberBoxes(creatorInput.value);
});

createNumberBoxes(creatorInput.value);