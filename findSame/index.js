function findSame() {
    let boxes = document.querySelectorAll(".boxes");
    let reset = document.getElementById("reset");
    let text = document.getElementById("text");

    for (let box of boxes) {
        box.addEventListener("click", function () {
            let counter = 0;

            for (let sameBox of boxes) {
                if (box.textContent == sameBox.textContent) {
                    sameBox.classList.add("clicked");
                    counter += 1;
                } else {
                    sameBox.classList.remove("clicked");
                    text.textContent = "";
                }
            }

            text.textContent = `${counter} copies of the number ${box.textContent}`;
        });

        reset.addEventListener("click", function () {
            text.textContent = "Click on a number to find copies";
            box.classList.remove("clicked");
        });
    };
};

findSame();