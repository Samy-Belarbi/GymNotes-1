export const rods = document.querySelectorAll(".rod");
export const container3 = document.getElementById("container-3");

export const startAnimationOnRods = () => { 

    for (let i = 0; i < rods.length; i++) {
        rods[i].classList.add(`rod-${i + 1}`);
    }

}