"use strict"

// IMPORT //

import { typewriter } from "./typeWriter.js";

import { container3, startAnimationOnRods} from "./chart.js";

import { activeButton, blackBackground } from "./hamburgerButton.js";

import { checkMenu, userIcon, closeMenu } from "./loginIcon.js";

import { startSlide } from "./sliderProgress.js";


const main = () => {

    // TYPEWRITER
    typewriter();

    // HAMBURGER MENU
    hamburgerButton.addEventListener("click", activeButton);
    blackBackground.addEventListener("click", activeButton);

    // CONNEXION
    userIcon.addEventListener("click", checkMenu);

    // ANIMATION DU GRAPHIQUE
    container3.addEventListener("mouseover", startAnimationOnRods);

    // SLIDER AUTO
    startSlide();

}  


addEventListener("load", main)