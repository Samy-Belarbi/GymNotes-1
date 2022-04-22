import { whichDay } from "./addDay.js";

export let exercice = {
    currentNumberOfExercices: 1,
    minNumberOfExercices: 1,
    maxNumberOfExercices: 3,
}

// DIV DES EXERCICES
export const numberOfSession = document.querySelector(".session");
export const exercicesDiv = numberOfSession.querySelector(".exercices");

// BUTTONS
export let test = `addExercice-${whichDay.day}`;
export let test2 = `removeExercice-${whichDay.day}`;

export let buttonAddExercice = document.getElementById(test);
export let buttonRemoveExercice = document.getElementById(test2);

// FONCTION QUI CREE UN EXERCICE
export const createExercice = () => {
    const divExercice = document.createElement("div");
    divExercice.classList.add("exercice");

    divExercice.innerHTML = `<div class="exercice-name">

    <label for="exo-${whichDay.day + exercice.currentNumberOfExercices}">Nom de l'exercice</label>
    <input type="text" id="exo-${whichDay.day + exercice.currentNumberOfExercices}" name="exo-${whichDay.day + exercice.currentNumberOfExercices}" minlength="2" maxlength="30" required>
</div>

<div class="rest">

    <p>Temps de repos :</p>

    <div>
        <label for="minutes-${whichDay.day + exercice.currentNumberOfExercices}">Minutes</label>
        <select name="minutes-${whichDay.day + exercice.currentNumberOfExercices}" id="minutes-${whichDay.day + exercice.currentNumberOfExercices}" required>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
        </select>


        <label for="seconds-${whichDay.day + exercice.currentNumberOfExercices}">Secondes</label>

        <select name="seconds-${whichDay.day + exercice.currentNumberOfExercices}" id="seconds-${whichDay.day + exercice.currentNumberOfExercices}" required>
            <option value="0">0</option>
            <option value="15">15</option>
            <option value="30">30</option>
            <option value="45">45</option>
        </select>
    </div>

</div>

<div class="performance">
    <label for="performance-${whichDay.day + exercice.currentNumberOfExercices}">Poids de l'haltère</label>
    <input type="number" id="performance-${whichDay.day + exercice.currentNumberOfExercices}" name="performance-${whichDay.day + exercice.currentNumberOfExercices}" max="500" maxlength="3">
</div>`

exercicesDiv.append(divExercice);

}

// FONCITON QUI AJOUTE UN EXERCICE
export const addExercice = () => {

    if (exercice.currentNumberOfExercices < exercice.maxNumberOfExercices) {
        exercice.currentNumberOfExercices++;
        createExercice();
    } 

    console.log(test)
}

// FONCTION QUI SUPPRIME UN EXERCICE
export const removeExercice = () => {
    if (exercice.currentNumberOfExercices > exercice.minNumberOfExercices) {
        exercice.currentNumberOfExercices--;
        exercicesDiv.lastChild.style.animation = "disparition ease-in-out 0.5s";
        setTimeout(() => exercicesDiv.removeChild(exercicesDiv.lastChild), 500)
        
    }

    console.log(test2);
}