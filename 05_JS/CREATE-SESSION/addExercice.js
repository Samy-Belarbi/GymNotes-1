// AJOUT D'EVENT LISTENER SUR LES BOUTONS
export const buttonAddEvent = (buttonAddExercice) => {

        buttonAddExercice.addEventListener("click", (event) => addExercice(event));
}

export const buttonRemoveExercice = (buttonRemove) => {
        buttonRemove.addEventListener("click", (event) => removeExercice(event));
};


// FONCTION QUI AJOUTE UN EXERCICE
export const addExercice = (event) => {

    const divExercices = event.target.parentNode;
    const session = divExercices.parentNode;
    const dayName = session.className.split(" ")[1];
    const insideButtonAddExercice = divExercices.querySelector(".addExercice");

    const numberOfExercice = divExercices.childElementCount;

    if (numberOfExercice > 10) {
        window.alert("Maximum d'exercices atteint !")
        return;
    }

    createExercice(dayName, numberOfExercice, divExercices, insideButtonAddExercice);
}

// FONCTION QUI REMOVE L'EXO
export const removeExercice = (event) => {
    const divExercice = event.target.parentNode;
    const divExercices = divExercice.parentNode;

    divExercices.removeChild(divExercice);
}

// FONCTION QUI CREE UN EXO
export const createExercice = (dayName, numberOfExercice, divExercices, buttonAddExercice) => {
    const divExercice = document.createElement("div");
    divExercice.classList.add("exercice");
    divExercices.insertBefore(divExercice, buttonAddExercice);

    const divExerciceName = document.createElement("div");
    divExerciceName.classList.add("exercice-name");
    divExercice.append(divExerciceName);

    const labelExercice = document.createElement("label");
    labelExercice.for = `"exo-${dayName}-${numberOfExercice}"`;
    labelExercice.innerText = "Nom de l'exercice";
    divExerciceName.append(labelExercice);

    const inputExercice = document.createElement("input");
    inputExercice.type = "text";
    inputExercice.id = labelExercice.for;
    inputExercice.name = inputExercice.id;
    inputExercice.minLength = 2;
    inputExercice.maxLength = 30;
    inputExercice.required;
    divExerciceName.append(inputExercice);

    const divRest = document.createElement("div");
    divRest.classList.add("rest");
    divExercice.append(divRest);

    const p = document.createElement("p");
    p.innerText = "Temps de repos :";

    const divForDivRest = document.createElement("div");
    divRest.append(divForDivRest);

    const labelRestMinutes = document.createElement("label");
    labelRestMinutes.for = `"minutes-${dayName}-${numberOfExercice}"`;
    labelRestMinutes.innerText = "Minutes";
    divForDivRest.append(labelRestMinutes);

    const selectRestMinutes = document.createElement("select");
    selectRestMinutes.name = labelRestMinutes.for;
    selectRestMinutes.id = selectRestMinutes.name;
    selectRestMinutes.required;
    selectRestMinutes.innerHTML = `" <option value="0">0</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
    <option value="9">9</option>
    <option value="10">10</option>"`;
    divForDivRest.append(selectRestMinutes);

    const labelRestSeconds = document.createElement("label");
    labelRestSeconds.for = `"seconds-${dayName}-${numberOfExercice}"`;
    labelRestSeconds.innerText = "Secondes";
    divForDivRest.append(labelRestSeconds);

    const selectRestSeconds = document.createElement("select");
    selectRestSeconds.name = labelRestSeconds.for;
    selectRestSeconds.id = selectRestMinutes.name;
    selectRestSeconds.required;
    selectRestSeconds.innerHTML = `"  <option value="0">0</option>
    <option value="15">15</option>
    <option value="30">30</option>
    <option value="45">45</option>"`;
    divForDivRest.append(selectRestSeconds);

    const divPerformance = document.createElement("div");
    divPerformance.classList.add("performance");
    divExercice.append(divPerformance);

    const labelPerformance = document.createElement("label");
    labelPerformance.for = `"performance-${dayName}-${numberOfExercice}"`
    labelPerformance.innerText = "Poids de l'haltère";
    divPerformance.append(labelPerformance);

    const inputPerformance = document.createElement("input");
    inputPerformance.type = "number";
    inputPerformance.id = labelPerformance.for;
    inputPerformance.name = inputPerformance.id;
    inputPerformance.max = "500";
    inputPerformance.maxLength = "3";
    divPerformance.append(inputPerformance);

    const buttonRemove = document.createElement("button");
    buttonRemove.type = "button";
    buttonRemove.classList.add("remove");
    buttonRemove.innerText = "-";
    divExercice.append(buttonRemove);

    buttonRemoveExercice(buttonRemove);

    return divExercice;
}