export const divSessions = document.getElementById("sessions");

// DAYS
export const days = document.querySelectorAll("label");
export const daysArray = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
export let selectedDaysArray = [];
selectedDaysArray.length = daysArray.length;
export let dayName;
export let indexOfDaySelected = 0;

days.forEach(day => {
    day.addEventListener("click", (event) => check(event));
})

// FONCTION CHECK

export const check = (event) => {

    const input = event.target.nextElementSibling;
    dayName = input.name;
    
    if (!input.checked) {
        addClassToLabel(event);
        input.checked;
        checkIfDayAlreadyCreated();
        createDay();
        return;
    };

    if (input.checked) {
        removeClassToLabel(event);
        input.checked = true;
        removeDay();
        return;
    };

};

// FONCTIONS ADD OU REMOVE CLASSES
export const addClassToLabel = (event) => {
    event.target.classList.add("checked");
}

export const removeClassToLabel = (event) => {
    event.target.classList.remove("checked");
}

// FONCTION QUI VERIFIE SI LE JOUR EXISTE DEJA
export const checkIfDayAlreadyCreated = () => {
    if (selectedDaysArray.includes(dayName)) {
        return true;
    }

    return false;
}

// FONCTION CREATION DE JOUR
export const createDay = () => {
    if (!checkIfDayAlreadyCreated()) {
        findDayNameIndex();
        selectedDaysArray.splice(indexOfDaySelected, 1, dayName);
        dayGenerator();
    }
};

// FONCTION REMOVE DE JOUR 
export const removeDay = () => {
    findDayNameIndex();
    selectedDaysArray.splice(indexOfDaySelected, 1, null);
    const dayToRemove = document.querySelector("." + dayName);
    divSessions.removeChild(dayToRemove);
};

// FONCTION TROUVE L'INDEX DU JOUR SELECTIONNE
export const findDayNameIndex = () => {
    indexOfDaySelected = daysArray.indexOf(dayName);
};

// FONCTION QUI CREE L'HTML D'UN JOUR
export const dayGenerator = () => {
    const divSession = document.createElement("div");
    divSession.classList.add("session");
    divSession.classList.add(dayName);

    const h4 = document.createElement("h4");
    h4.innerText = dayName;
    divSession.append(h4);

    const divExercices = document.createElement("div");
    divExercices.classList.add("exercices");
    divSession.append(divExercices);

    const divExercice = document.createElement("div");
    divExercice.classList.add("exercice");
    divExercices.append(divExercice);

    const divExerciceName = document.createElement("div");
    divExerciceName.classList.add("exercice-name");
    divExercice.append(divExerciceName);

    const labelExercice = document.createElement("label");
    labelExercice.for = `"exo-${dayName}-1"`;
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
    labelRestMinutes.for = `"minutes-${dayName}-1"`;
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
    labelRestSeconds.for = `"seconds-${dayName}-1"`;
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
    labelPerformance.for = `"performance-${dayName}-1"`
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

    const buttonAddExercice = document.createElement("button");
    buttonAddExercice.type = "button";
    buttonAddExercice.classList.add("addExercice");
    buttonAddExercice.innerText = "+";
    divExercices.append(buttonAddExercice);

    if (dayName === daysArray[0]) {
        divSessions.prepend(divSession);
        return;
    }

    if (dayName === daysArray[6]) {
        divSessions.append(divSession);
        return;
    }

    divSessions.append(divSession);

    console.log(selectedDaysArray[6]);

    // selectedDaysArray.indexOf(dayName)+1]

    // divSessions.insertBefore(divSession, selectedDaysArray.indexOf(dayName)+1);

};
