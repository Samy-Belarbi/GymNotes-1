// TABLEAU AVEC TOUS LES H2
export const typewriterH2 = document.querySelectorAll("#typewrited");

// RECUPERATION DES ID DES LINES
export const createSession = document.getElementById("createSession");
export const startSession = document.getElementById("startSession");
export const trackProgress = document.getElementById("trackProgress");

// RECUPERATION DES AFTER
export const createAfter = window.getComputedStyle(createSession, "::after");
export const startAfter = window.getComputedStyle(startSession, "::after");
export const trackAfter = window.getComputedStyle(trackProgress, "::after");


// MESSAGES
export let messageCreate = ["CRÉE TA SÉANCE"];
export let messageCreatePosition = 0;

export let messageStart = ["DÉMARRE TA SÉANCE"];
export let messageStartPosition = 0;

export let messageTrack = ["SUIS TA PROGRESSION"];
export let messageTrackPosition = 0;

// VITESSE MESSAGE
export let speedMessage = 90;

// FONCTION TYPEWRITER
export const typewriter = () => {

    createSession.innerHTML = messageCreate[0].substring(0, messageCreatePosition);

    startSession.innerHTML = messageStart[0].substring(0, messageStartPosition);

    trackProgress.innerHTML = messageTrack[0].substring(0, messageTrackPosition);

    if (messageCreatePosition !== messageCreate[0].length) {
        messageCreatePosition++;
    }

    if (messageCreatePosition === messageCreate[0].length
        && messageStartPosition !== messageStart[0].length) {

        createSession.style.setProperty("--widthAfter", "0px");

        createSession.style.opacity = "0.5";

        messageStartPosition++;
    }

    if (messageStartPosition === messageStart[0].length
        && messageTrackPosition !== messageTrack[0].length) {

        startSession.style.opacity = "0.5";
        startSession.style.setProperty("--widthAfter", "0px");
        messageTrackPosition++;

    }

    if (messageTrackPosition === messageTrack[0].length) {

        createSession.style.opacity = "";
        startSession.style.opacity = "";
        typewriterH2.forEach(h2 => {
            h2.style.opacity = "0.2";
            h2.style.pseudoelement = "0px";

        })

        trackProgress.style.setProperty("--widthAfter", "0px");

    }


    setTimeout(typewriter, speedMessage);

}