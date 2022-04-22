import { numberOfLi, removeButtonGenerate, createButtonGenerate, li, buttonGenerateExist, position, widthLi, arrayLi } from "./slider.js";

// LABEL
export const labels = document.querySelectorAll("label");

labels.forEach(label => {
    label.addEventListener("click", (event) => check(event));
});

export let inputs = {
    checked: 0,
    actualClicked: 0,
};

export const check = (event) => {

    const labelParent = event.target.parentNode;
    const liParent = labelParent.parentNode;

    const liArray = Array.from(arrayLi);
    
    const input = event.target.nextElementSibling;

    inputs.actualClicked = liArray.indexOf(liParent);

    if (!input.checked) {
        removeClassCheckedToAllLabels(labelParent);
        addClassLabelTargeted(event, labelParent);
        input.checked = true;
        addInputChecked();
        checkPermaInputsChecked();
        return;
    };

    if (input.checked && buttonGenerateExist) {
        removeClassCheckedToAllLabels(labelParent);
        removeButtonGenerate();
        input.checked = false;
        reduceInputChecked();
        checkPermaInputsChecked();
        return;
    }

    if (input.checked) {
        removeClassCheckedToAllLabels(labelParent);
        input.checked = false;
        reduceInputChecked();
        checkPermaInputsChecked();
        return;
    };

};

export const checkPermaInputsChecked = () => {

    const calculatorLi = arrayLi[(position.x)/widthLi];

    const lastLi = arrayLi[arrayLi.length - 1];

    const actualInputsVisible = calculatorLi.querySelectorAll("input:checked");

    if (actualInputsVisible.length === 0) {
        return false;
    }

    const arrayActualInput = Array.from(actualInputsVisible);
    const actualLi = arrayActualInput[0].parentNode.parentNode;

    if (lastLi === actualLi) {
        createButtonGenerate();
    }

    return true;

}

export const addInputChecked = () => {

    if (inputs.checked <= inputs.actualClicked
        && inputs.checked < numberOfLi) {
        inputs.checked++;
    }


};

export const reduceInputChecked = () => {

    if (inputs.checked - inputs.actualClicked === 1) {
        inputs.checked--;
    }

};


export const removeClassCheckedToAllLabels = (labelParent) => {

    const labelsOfDiv = labelParent.querySelectorAll("label");

    labelsOfDiv.forEach(label => {
        label.classList.remove("checked");
    })
};

export const addClassLabelTargeted = (event) => {
    event.target.classList.add("checked");
};