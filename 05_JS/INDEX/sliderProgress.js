"use strict";

export const sliderContainer = document.getElementById("slider-container");
export const slides = document.querySelector(".slides");
export const buttonRight = document.getElementById("button-right");
export const buttonLeft = document.getElementById("button-left");
export const interval = 3000;

export let slide = document.querySelectorAll(".slide");
export let index = 1;
export let slideId;

export const firstClone = slide[0].cloneNode(true);
export const lastClone = slide[slide.length - 1].cloneNode(true);

firstClone.id = "first-clone";
lastClone.id = "last-clone";

slides.append(firstClone);
slides.prepend(lastClone);

export const slideWidth = slide[index].clientWidth;

slides.style.transform = `translateX(${-slideWidth * index}px)`;

export const startSlide = () => {
    slideId = setInterval(() => {
      moveToNextSlide();
    }, interval);
  };
  
  export const getSlides = () => document.querySelectorAll(".slide");
  
  slides.addEventListener("transitionend", () => {
    slide = getSlides();
    if (slide[index].id === firstClone.id) {
        const rods = document.querySelectorAll(".rod");
        rods.forEach(rod => {
            rod.style.animation = "none";
        })

      slides.style.transition = "none";
      index = 1;
      slides.style.transform = `translateX(${-slideWidth * index}px)`;
    }
  
    if (slide[index].id === lastClone.id) {
      slides.style.transition = "none";
      index = slide.length - 2;
      slides.style.transform = `translateX(${-slideWidth * index}px)`;
    }
  });
  
  export const moveToNextSlide = () => {
    slide = getSlides();
    if (index >= slide.length - 1) return;
    index++;
    slides.style.transition = "0.7s ease-in-out";
    slides.style.transform = `translateX(${-slideWidth * index}px)`;
  };
  
  export const moveToPreviousSlide = () => {
    if (index <= 0) return;
    index--;
    slides.style.transition = '.7s ease-in-out';
    slides.style.transform = `translateX(${-slideWidth * index}px)`;
  };
  
  sliderContainer.addEventListener("mouseenter", () => {
    clearInterval(slideId);
  });
  
  sliderContainer.addEventListener("mouseleave", startSlide);
  buttonRight.addEventListener("click", moveToNextSlide);
  buttonLeft.addEventListener("click", moveToPreviousSlide);
  
  
