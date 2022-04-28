export const userIcon = document.getElementById("login");
export const userInfos = document.getElementById("userInfos");

export let isMenuOpen = false;

export const checkMenu = () => {

    if (window.innerWidth <= 700) {
        return;
     }

    if (!isMenuOpen) {
        console.log(isMenuOpen);
        openMenu();

    } else {
       closeMenu();
    }
}

export const openMenu = () => {
    userInfos.style.height = "200px";
    isMenuOpen = true;
}

export const closeMenu = () => {
    userInfos.style.height = "0px";
    isMenuOpen = false;
}