"use strict";

import { buttonValid, makeSlideToRight, widthLi } from "./slider.js";

import { check } from "./checkRadio.js";

const main = () => {

    buttonValid.addEventListener("click", makeSlideToRight);
    
}

addEventListener("load", main);