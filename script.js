import Select from "./select.js";

const selectElements = document.querySelectorAll('[data-custom]');

// placeholder for actual code
selectElements.forEach(selectElement => {
    new Select(selectElement)
});