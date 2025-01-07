function addUpTo() {
    let boxes = document.querySelectorAll(".boxes");
    let findPar = document.getElementById("findTwo");
    let numberInput = document.getElementById("numberInput");

    findPar.addEventListener("click", function () {
        let numberText = Number(numberInput.value);

        for (let box of boxes) {
            box.classList.remove("clicked");
        }

        for (let box of boxes) {
            for (let box2 of boxes) {
                let value1 = Number(box.innerText);
                let value2 = Number(box2.innerText);

                if (value1 + value2 === numberText) {
                    box.classList.add("clicked");
                    box2.classList.add("clicked");
                    return;
                }
            }
        }
    });
};

addUpTo();