function remove() {
    let boxes = document.querySelectorAll(".boxes");

    let newNumberButton = document.getElementById("newNumberButton");
    let removeButton = document.getElementById("removeButton");
    let newNumber = document.getElementById("newNumber");
    let removeNumber = document.getElementById("removeNumber");

    let newNumberTextBox = "";
    let counter = 0;


    newNumberButton.addEventListener("click", function () {
        newNumber.textContent = randomInt(1, 100)
        newNumberTextBox = Number(newNumber.textContent);
        counter = 0;

        for (let box of boxes) {
            if (newNumberTextBox == box.textContent) {
                box.classList.add("clicked");
                counter += 1;
            }
        }

        removeNumber.textContent = "-";
    });


    removeButton.addEventListener("click", function () {
        let foundMatch = false;

        for (let box of boxes) {
            if (newNumberTextBox == box.textContent) {
                foundMatch = true;
                box.style.backgroundColor = "red";
                box.textContent = "X";
                box.style.fontSize = "26px";
            }
        }

        if (foundMatch == true) {
            removeNumber.textContent = `${newNumber.textContent} removed ${counter} times`;
        } else {
            removeNumber.textContent = "Nothing to remove";
        }
    });
};

remove();