"use strict"

// IMPORT //

import { typewriter } from "./typeWriter.js";

import { container3, startAnimationOnRods} from "./chart.js";

import { activeButton, blackBackground } from "./hamburgerButton.js";

import { checkMenu, userIcon, closeMenu, isMenuOpen } from "./loginIcon.js";

import { checkMouseOnSlider, startSlide } from "./sliderProgress.js";

const container1 = document.getElementById("container-1");
const container2 = document.getElementById("container-2");

const container1Height = container1.offsetHeight;
const container2Height = container2.offsetHeight;


const main = () => {

    // TYPEWRITER
    typewriter();

    // HAMBURGER MENU
    hamburgerButton.addEventListener("click", activeButton);
    blackBackground.addEventListener("click", activeButton);

    // CONNEXION
    userIcon.addEventListener("click", checkMenu);

    checkScrollPosition();

}  

const checkScrollPosition = () => {
    let actualScrollPosition = document.body.scrollTop;

    const finalScrollPosition = container1Height + (container2Height / 2);

    if (actualScrollPosition >= finalScrollPosition) {

        launchSliderAnimations();

        return;

    }

    window.requestAnimationFrame(checkScrollPosition);

}

const launchSliderAnimations = () => {
         // ANIMATION DU GRAPHIQUE
         startAnimationOnRods();
   
         // SLIDER AUTO

         if (window.innerWidth > 800) {
            startSlide();
         }

         checkMouseOnSlider();

}


addEventListener("load", main)