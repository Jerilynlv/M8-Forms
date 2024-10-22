document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("myForm");
    const inputField = document.getElementById("inputField");

    form.addEventListener("submit", function (event) {
        const inputValue = inputField.value;
        const alphanumeric = /^[a-zA-Z0-9]+$/;

        inputField.setCustomValidity("");

        if (!alphanumeric.test(inputValue)) {

            inputField.setCustomValidity("Input must be alphanumeric");
        }

        if (!form.checkValidity()) {

            event.preventDefault();
            inputField.reportValidity();

        } else {

            alert("Input is valid! Form submitted successfully")
        }

    });
});