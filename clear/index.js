function clear() {
    let boxes = document.querySelectorAll(".boxes");
    let clearAll = document.getElementById("clearAll");

    for (let box of boxes) {
        let boxText = box.textContent;

        box.addEventListener("click", function () {
            if (box.classList.contains("clicked")) {
                box.classList.remove("clicked");
                box.textContent = boxText;
            } else {
                box.classList.add("clicked");
                box.textContent = "";
            }
        });

        clearAll.addEventListener("click", function () {
            box.classList.remove("clicked");
            box.textContent = boxText;
        });
    }
}

clear();