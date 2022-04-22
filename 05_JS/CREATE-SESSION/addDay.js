import { exercice } from "./addExercice.js";

export const days = document.querySelectorAll(".day");

export let whichDay = {
    day: "Lundi",
}

export let dayCounter = {
    Lundi: 0,
    Mardi: 0,
    Mercredi: 0,
    Jeudi: 0,
    Vendredi: 0,
    Samedi: 0,
    Dimanche: 0,
}

days.forEach(day => {
    day.addEventListener("click", (event) => check(event));
})

export const check = (event) => {
    const input = event.target.querySelector("input");

    if (!input.checked) {
        event.target.style.backgroundColor = "blue";
        event.target.style.color = "white";
        event.target.style.transform = "scale(1.05)";
        input.checked = true;
        whichDay.day = input.name;
        addDay(input);
        return;
    }

    if (input.checked === true) {
        event.target.style.transform = "scale(1)";
        event.target.style.color = "black";
        event.target.style.backgroundColor = "rgb(188, 188, 188)";
        input.checked = false;
        whichDay.day = null;
        return;
    }

}

export const addDay = (input) => {

    const divSessions = document.getElementById("sessions");

    const divDay = document.createElement("div");
    divDay.classList.add("session");

    console.log(whichDay.day);

    divDay.innerHTML = `
    
    <h4>${whichDay.day}</h4>

    <div class="exercices">

        <div class="exercice">

            <div class="exercice-name">

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

            </div>

        </div>

    </div>
    
    <div class="buttonsExercices">

    <button type="button" id="addExercice-${whichDay.day}">+</button>
    <button type="button" id="removeExercice-${whichDay.day}">-</button>

    </div>

    <button type="button" id="sendSession${whichDay.day}">Valider la séance</button>
    </div>`

    divSessions.append(divDay);

}   