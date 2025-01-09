function sum() {
    let boxes = document.querySelectorAll(".boxes");
    let reset = document.getElementById("reset");
    let sumOfMarked = document.getElementById("text");
    let sumCounter = 0;
    let markedCounter = 0;


    for (let box of boxes) {
        sumCounter += Number(box.textContent);
    }

    let sumOfAll = document.getElementById("sumOfAll");
    sumOfAll.textContent = sumCounter;

    for (let box of boxes) {
        box.addEventListener("click", function () {
            if (!box.classList.contains("clicked")) {
                box.classList.add("clicked");
                markedCounter += Number(box.textContent);
                sumOfMarked.textContent = markedCounter;
            }
        });


        reset.addEventListener("click", function () {
            markedCounter = 0;
            sumOfMarked.textContent = "-";

            for (let sameBox of boxes) {
                sameBox.classList.remove("clicked");
            }
        });
    }
};

sum();