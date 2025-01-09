function addUpTo() {
    let boxes = document.querySelectorAll(".boxes");
    let findPar = document.getElementById("findTwo");
    let numberInput = document.getElementById("numberInput");

    findPar.addEventListener("click", function () {
        let numberText = Number(numberInput.value);

        for (let box of boxes) {
            box.classList.remove("clicked");
        }

        for (let i = 0; i < boxes.length; i++) {
            let value1 = Number(boxes[i].innerText);

            for (let j = i + 1; j < boxes.length; j++) {
                let value2 = Number(boxes[j].innerText);

                if (value1 + value2 === numberText) {
                    boxes[i].classList.add("clicked");
                    boxes[j].classList.add("clicked");
                    return;
                }
            }
        }
    });
};

addUpTo();