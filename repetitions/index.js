function repetitions() {
    let boxes = document.querySelectorAll(".boxes");
    let allMostElement = document.getElementById("allMost");
    let moreElement = document.getElementById("more");

    let arrayOfObjects = [];
    let result = [];
    let missingNumbers = [];
    let numbers = [];

    let maxRepetitions = 0;

    for (let box of boxes) {
        let counter = 0;

        for (let nextBox of boxes) {
            if (box.textContent == nextBox.textContent) {
                counter += 1;
            }
        }

        let object = { number: Number(box.textContent), repetitions: counter };
        arrayOfObjects.push(object);
    }


    for (let i = 0; i < arrayOfObjects.length; i++) {
        let obj = arrayOfObjects[i];

        if (obj.repetitions > maxRepetitions) {
            maxRepetitions = obj.repetitions;
            result = [obj];
        }

        if (obj.repetitions === maxRepetitions) {
            let alreadyExists = false;

            for (let j = 0; j < result.length; j++) {
                if (result[j].number === obj.number) {
                    alreadyExists = true;
                    break;
                }
            }

            if (!alreadyExists) {
                result.push(obj);
            }
        }
    }


    result.sort(function (a, b) {
        return a.number - b.number;
    });

    for (let i = 0; i < result.length; i++) {
        let obj = result[i];
        numbers.push(obj.number);
    }

    allMostElement.textContent = numbers.join(", ") + " (Repeated " + maxRepetitions + " times)";


    for (let box of boxes) {
        let number = Number(box.textContent);

        for (let i = 0; i < result.length; i++) {
            if (result[i].number === number) {
                box.classList.add("highlight");
                break;
            }
        }
    }


    for (let i = 1; i < 100; i++) {
        let foundInGrid = false;

        for (let box of boxes) {
            if (Number(box.textContent) === i) {
                foundInGrid = true;
                break;
            }
        }

        if (!foundInGrid) {
            missingNumbers.push(i);
        }
    }

    if (missingNumbers.length === 0) {
        moreElement.textContent = "-";
    } else {
        moreElement.textContent = missingNumbers.join(", ");
    }
};

repetitions();