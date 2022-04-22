export const hamburgerButton = document.getElementById("hamburgerButton");
export const header = document.querySelector("header");
export const blackBackground = document.getElementById("blackBackground");

export let buttonActivated = false;

export const activeButton = () => {

    if (!buttonActivated) {
        hamburgerButton.classList.add("active");
        hamburgerButton.style.transform = "translateX(150px)"
        header.style.transform = "translateX(0)";
        blackBackground.style.transform = "translateX(0)";

        buttonActivated = true;
        
    } else {
        hamburgerButton.classList.remove("active");
        hamburgerButton.style.transform = "translateX(0px)"
        header.style.transform = "translateX(-200px)";
        blackBackground.style.transform = "translateX(-100vw)";

        buttonActivated = false;
    }
}