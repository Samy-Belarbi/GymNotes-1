"use strict";

import { addExercice, removeExercice, buttonAddExercice, buttonRemoveExercice, numberOfSession } from "./addExercice.js";

import { check } from "./addDay.js";


const main = () => {


    buttonAddExercice.addEventListener("click", addExercice);
    buttonRemoveExercice.addEventListener("click", removeExercice);
}

addEventListener("load", main);